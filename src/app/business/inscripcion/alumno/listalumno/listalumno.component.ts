import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listalumno',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listalumno.component.html',
  styleUrl: './listalumno.component.css',
})
export class ListalumnoComponent implements OnInit {
  alumnos: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/alumnos/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadAlumnos(this.currentUrl);
  }

  async loadAlumnos(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allAlumnoPaginated(url, token);
      //console.log('alumnos:', response);

      if (response) {
        this.alumnos = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar alumnos:', error);
    }
  }

  alumnosFiltrados() {
    if (!this.filtro.trim()) return this.alumnos;

    const filtroLower = this.filtro.toLowerCase();
    return this.alumnos.filter(
      (alumno: any) =>
        alumno.username.toLowerCase().includes(filtroLower) ||
        alumno.first_name.toLowerCase().includes(filtroLower) ||
        alumno.email.toLowerCase().includes(filtroLower)
    );
  }

  navigateToUpdate(alumnoId: string) {
    this.router.navigate(['/alumnos/edit', alumnoId]);
  }

  async deleteUser(alumnoId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar este profesor?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.userService.deleteUser(alumnoId, token);
        this.loadAlumnos(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar profesor:', error);
      }
    }
  }

  editarAlumno(user: any) {
    // tu lógica aquí
  }

  eliminarAlumno(id: number) {
    // tu lógica aquí
  }
}
