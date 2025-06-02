import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listgrado',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listgrado.component.html',
  styleUrl: './listgrado.component.css',
})
export class ListgradoComponent implements OnInit {
  grados: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/grados/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadGrados(this.currentUrl);
  }

  async loadGrados(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allGradoPaginated(url, token);
      //console.log('grados:', response);

      if (response) {
        this.grados = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar grados:', error);
    }
  }

  gradosFiltrados() {
    if (!this.filtro.trim()) return this.grados;

    const filtroLower = this.filtro.toLowerCase();
    return this.grados.filter(
      (grado: any) =>
        grado.nombre.toLowerCase().includes(filtroLower) ||
        grado.tipo.toLowerCase().includes(filtroLower)
    );
  }

  navigateToUpdate(periodoId: string) {
    this.router.navigate(['/grado/edit', periodoId]);
  }

  async deleteGrado(gradoId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar este periodo?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.userService.deleteUser(gradoId, token);
        this.loadGrados(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar periodo:', error);
      }
    }
  }

  editarGrado(user: any) {
    // tu lógica aquí
  }

  eliminarGrado(id: number) {
    // tu lógica aquí
  }
}
