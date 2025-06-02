import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listgestion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listgestion.component.html',
  styleUrl: './listgestion.component.css',
})
export class ListgestionComponent implements OnInit {
  gestiones: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/gestiones/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadGestiones(this.currentUrl);
  }

  async loadGestiones(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allPeriodoPaginated(url, token);
      //console.log('gestiones:', response);

      if (response) {
        this.gestiones = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar gestiones:', error);
    }
  }

  gestionesFiltrados() {
    if (!this.filtro.trim()) return this.gestiones;

    const filtroLower = this.filtro.toLowerCase();
    return this.gestiones.filter(
      (periodo: any) =>
        periodo.nombre.toLowerCase().includes(filtroLower) ||
        periodo.tipo.toLowerCase().includes(filtroLower)
    );
  }

  navigateToUpdate(periodoId: string) {
    this.router.navigate(['/periodo/edit', periodoId]);
  }

  async deletePeriodo(periodoId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar este periodo?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.userService.deleteUser(userId, token);
        this.loadGestiones(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar periodo:', error);
      }
    }
  }

  editarGestion(user: any) {
    // tu lógica aquí
  }

  eliminarGestion(id: number) {
    // tu lógica aquí
  }
}
