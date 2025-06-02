import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-listaula',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listaula.component.html',
  styleUrl: './listaula.component.css',
})
export class ListaulaComponent implements OnInit {
  aulas: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.userService.BASE_URL}/api/aulas/`; // o usa una constante/baseURL
  count: number = 0;

  constructor(
    private readonly userService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadAulas(this.currentUrl);
  }

  async loadAulas(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.userService.allAulaPaginated(url, token);
      //console.log('aulas:', response);

      if (response) {
        this.aulas = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar aulas:', error);
    }
  }

  aulasFiltrados() {
    if (!this.filtro.trim()) return this.aulas;

    const filtroLower = this.filtro.toLowerCase();
    return this.aulas.filter(
      (aula: any) =>
        aula.codigo.toLowerCase().includes(filtroLower) ||
        aula.tipo.toLowerCase().includes(filtroLower)
    );
  }

  navigateToUpdate(periodoId: string) {
    this.router.navigate(['/aulas/edit', periodoId]);
  }

  async deleteGrado(aulaId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar esta aula?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.userService.deleteUser(aulaId, token);
        this.loadAulas(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar Aula:', error);
      }
    }
  }

  editarAula(user: any) {
    // tu lógica aquí
  }

  eliminarAula(id: number) {
    // tu lógica aquí
  }
}
