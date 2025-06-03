import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-updateusuario',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './updateusuario.component.html',
  styleUrl: './updateusuario.component.css',
})
export class UpdateusuarioComponent implements OnInit {
  usuarioId!: number;
  usuario = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    rol: '',
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerUsuarioPorId(this.usuarioId);
  }

  obtenerUsuarioPorId(id: number): void {
    this.authService.obtenerUsuarioPorId(id).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
      },
      error: (error) => {
        this.mostrarToast('Error', 'No se pudo cargar el usuario', false);
      },
    });
  }

  actualizarUsuario() {
    console.log('Usurio:', this.usuario);
    this.authService
      .actualizarUsuarioPorId(this.usuarioId, this.usuario)
      .subscribe({
        next: (response) => {
          console.log('Usuario actualizado', response);
          this.mostrarToast('Éxito', 'Usuario actualizado correctamente', true);
          setTimeout(() => this.router.navigate(['/usuarios']), 3000);
        },
        error: (error) => {
          console.error('Error al actualizar usuario:', error);
          this.mostrarToast('Error', 'Error al actualizar usuario', false);
        },
      });
  }

  cancelar() {
    this.router.navigate(['/usuarios']);
  }

  mostrarToast(titulo: string, mensaje: string, exito: boolean) {
    $('#toast-title').text(titulo);
    $('#toast-body').text(mensaje);

    const header = $('#toast .toast-header');
    header.removeClass('bg-success bg-danger text-white');
    header.addClass(exito ? 'bg-success text-white' : 'bg-danger text-white');

    $('#toast').toast({ autohide: true, delay: 3000 }).toast('show');
  }
}
