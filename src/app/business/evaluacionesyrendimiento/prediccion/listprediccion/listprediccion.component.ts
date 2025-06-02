import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listprediccion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listprediccion.component.html',
  styleUrl: './listprediccion.component.css',
})
export class ListprediccionComponent implements OnInit {
  predicciones: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/predicciones/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadPrediccion(this.currentUrl);
  }

  async loadPrediccion(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allPrediccionPaginated(
        url,
        token
      );
      //console.log('predicciones:', response);

      if (response) {
        this.predicciones = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar predicciones:', error);
    }
  }

  prediccionesFiltrados() {
    if (!this.filtro.trim()) return this.predicciones;

    const filtroLower = this.filtro.toLowerCase();
    return this.predicciones.filter(
      (prediccion: any) =>
        prediccion.modelo_utilizado.toLowerCase().includes(filtroLower) ||
        prediccion.categoria_rendimiento.toLowerCase().includes(filtroLower)
    );
  }

  navigateToUpdate(prediccionId: string) {
    this.router.navigate(['/prediccion/edit', prediccionId]);
  }

  async deletePrediccion(prediccionId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar este periodo?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.userService.deleteUser(prediccionId, token);
        this.loadPrediccion(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar periodo:', error);
      }
    }
  }

  editarPrediccion(user: any) {
    // tu lógica aquí
  }

  eliminarPrediccion(id: number) {
    // tu lógica aquí
  }
}
