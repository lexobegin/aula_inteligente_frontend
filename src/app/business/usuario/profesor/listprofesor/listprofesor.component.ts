import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listprofesor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listprofesor.component.html',
  styleUrl: './listprofesor.component.css',
})
export class ListprofesorComponent implements OnInit {
  users: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/profesores/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadProfesores(this.currentUrl);
  }

  async loadProfesores(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allProfesorPaginated(url, token);
      //console.log('profesores:', response);

      if (response) {
        this.users = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar profesores:', error);
    }
  }

  usuariosFiltrados() {
    if (!this.filtro.trim()) return this.users;

    const filtroLower = this.filtro.toLowerCase();
    return this.users.filter(
      (user: any) =>
        user.username.toLowerCase().includes(filtroLower) ||
        user.first_name.toLowerCase().includes(filtroLower) ||
        user.email.toLowerCase().includes(filtroLower)
    );
  }

  navigateToUpdate(userId: string) {
    this.router.navigate(['/profesores/edit', userId]);
  }

  async deleteUser(userId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar este profesor?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.userService.deleteUser(userId, token);
        this.loadProfesores(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar profesor:', error);
      }
    }
  }

  editarUsuario(user: any) {
    // tu lógica aquí
  }

  eliminarUsuario(id: number) {
    // tu lógica aquí
  }
}
