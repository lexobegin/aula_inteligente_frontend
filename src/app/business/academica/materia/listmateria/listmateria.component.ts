import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listmateria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listmateria.component.html',
  styleUrl: './listmateria.component.css',
})
export class ListmateriaComponent implements OnInit {
  materias: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/materias/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadMaterias(this.currentUrl);
  }

  async loadMaterias(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allMateriaPaginated(url, token);
      //console.log('materias:', response);

      if (response) {
        this.materias = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar materias:', error);
    }
  }

  materiasFiltrados() {
    if (!this.filtro.trim()) return this.materias;

    const filtroLower = this.filtro.toLowerCase();
    return this.materias.filter(
      (materia: any) =>
        materia.nombre.toLowerCase().includes(filtroLower) ||
        materia.nivel.toLowerCase().includes(filtroLower)
    );
  }

  navigateToUpdate(periodoId: string) {
    this.router.navigate(['/grado/edit', periodoId]);
  }

  async deleteGrado(materiaId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar esta materia?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.userService.deleteUser(materiaId, token);
        this.loadMaterias(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar materia:', error);
      }
    }
  }

  editarMateria(user: any) {
    // tu lógica aquí
  }

  eliminarMateria(id: number) {
    // tu lógica aquí
  }
}
