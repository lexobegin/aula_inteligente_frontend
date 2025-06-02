import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listperiodo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listperiodo.component.html',
  styleUrl: './listperiodo.component.css',
})
export class ListperiodoComponent implements OnInit {
  periodos: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/periodos/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadPeriodos(this.currentUrl);
  }

  async loadPeriodos(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allPeriodoPaginated(url, token);
      //console.log('Periodos:', response);

      if (response) {
        this.periodos = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar Periodos:', error);
    }
  }

  periodosFiltrados() {
    if (!this.filtro.trim()) return this.periodos;

    const filtroLower = this.filtro.toLowerCase();
    return this.periodos.filter(
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
        this.loadPeriodos(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar periodo:', error);
      }
    }
  }

  editarPeriodo(user: any) {
    // tu lógica aquí
  }

  eliminarPeriodo(id: number) {
    // tu lógica aquí
  }
}
