import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-listusuario',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './listusuario.component.html',
  styleUrl: './listusuario.component.css',
})
export class ListusuarioComponent implements OnInit {
  usuarioAEliminarId: number | null = null;

  users: any[] = [];
  filtro: string = '';
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;
  currentUrl: string = `${this.authService.BASE_URL}/api/usuarios/`; // o usa una constante/baseURL
  count: number = 0;

  //terminoBusqueda: string = '';
  //usuarios: any[] = []; // Lista completa de usuarios

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios(this.currentUrl);
  }

  async obtenerUsuarios(url: string) {
    try {
      const token: any = localStorage.getItem('authToken');
      const response = await this.authService.obtenerTodosLosUsuarios(
        url,
        token
      );

      if (response) {
        this.users = response.results;
        this.count = response.count;
        this.nextPageUrl = response.next;
        this.previousPageUrl = response.previous;
        this.currentUrl = url;
      }
    } catch (error: any) {
      console.error('Error al cargar usuarios:', error);
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
    this.router.navigate(['/usuarios/edit', userId]);
  }

  async deleteUser(userId: string) {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar este usuario?'
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('authToken');
        //await this.authService.deleteUser(userId, token);
        this.obtenerUsuarios(this.currentUrl); // recargar la página actual
      } catch (error: any) {
        console.error('Error al eliminar usuario:', error);
      }
    }
  }

  editarUsuario(id: number) {
    this.router.navigate([`/usuarios/edit/${id}`]);
  }
  verDetalleUsuario(id: number): void {
    console.log('Ver datalle usuario');
    //this.router.navigate([`/usuarios/edit/${id}`]);
  }

  eliminarUsuario(id: number) {
    // Sirve pero no se ocupa
    const confirmacion = confirm(
      '¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.'
    );

    if (confirmacion) {
      this.authService.eliminarUsuario(id).subscribe({
        next: () => {
          this.mostrarToast('Éxito', 'Usuario eliminado correctamente', true);
          this.obtenerUsuarios(this.currentUrl); // Recargar lista
        },
        error: (error) => {
          console.error('Error al eliminar usuario:', error);
          this.mostrarToast('Error', 'No se pudo eliminar el usuario', false);
        },
      });
    }
  }

  // Llama esto al hacer clic en el botón eliminar
  abrirModalEliminar(id: number) {
    this.usuarioAEliminarId = id;
    $('#confirmDeleteModal').modal('show');
  }

  confirmarEliminacion() {
    if (this.usuarioAEliminarId !== null) {
      this.authService.eliminarUsuario(this.usuarioAEliminarId).subscribe({
        next: () => {
          this.mostrarToast('Éxito', 'Usuario eliminado correctamente', true);
          this.obtenerUsuarios(this.currentUrl); // Recargar lista
        },
        error: (err) => {
          console.error('Error al eliminar usuario', err);
          this.mostrarToast('Error', 'No se pudo eliminar el usuario', false);
        },
        complete: () => {
          $('#confirmDeleteModal').modal('hide');
          this.usuarioAEliminarId = null;
        },
      });
    }
  }

  /*usuariosFiltradosBus(): any[] { // no funciona
    if (!this.terminoBusqueda.trim()) {
      return this.usuarios;
    }

    const termino = this.terminoBusqueda.toLowerCase();

    return this.usuarios.filter((u) => {
      const nombreCompleto = `${u.first_name} ${u.last_name}`.toLowerCase();
      const rol = u.rol.toLowerCase();

      return nombreCompleto.includes(termino) || rol.includes(termino);
    });
  }*/

  mostrarToast(titulo: string, mensaje: string, exito: boolean) {
    $('#toast-title').text(titulo);
    $('#toast-body').text(mensaje);

    const header = $('#toast .toast-header');
    header.removeClass('bg-success bg-danger text-white');
    header.addClass(exito ? 'bg-success text-white' : 'bg-danger text-white');

    $('#toast').toast({ autohide: true, delay: 3000 }).toast('show');
  }
}
