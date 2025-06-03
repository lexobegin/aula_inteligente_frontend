import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
//import { ToastService } from '../../../../core/services/toast.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

declare var $: any; // Para usar jQuery con Bootstrap 4.6

@Component({
  selector: 'app-registerusuario',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './registerusuario.component.html',
  styleUrl: './registerusuario.component.css',
})
export class RegisterusuarioComponent implements AfterViewInit {
  usuario = {
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    rol: '',
    password: '',
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngAfterViewInit() {
    // Inicializa el toast al cargar el componente
    $('#toast').toast({ autohide: true, delay: 3000 });
  }

  crearUsuario() {
    this.authService.crearUsuario(this.usuario).subscribe({
      next: () => {
        //alert('Usuario registrado exitosamente');
        this.mostrarToast('Éxito', 'Usuario registrado correctamente', true);
        //this.router.navigate(['/usuarios']); // Cambia por la ruta deseada
        setTimeout(() => {
          this.router.navigate(['/usuarios']);
        }, 3000); // espera a que el toast se muestre
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error);
        //alert('Error al registrar usuario');
        this.mostrarToast('Error', 'Error al registrar usuario', false);
        //this.toastService.setToast('Error al registrar usuario', false);
      },
    });
  }
  cancelar(): void {
    this.router.navigate(['/usuarios']); // Redirige a la lista de personas
  }

  mostrarToast(titulo: string, mensaje: string, exito: boolean) {
    $('#toast-title').text(titulo);
    $('#toast-body').text(mensaje);

    const header = $('#toast .toast-header');
    header.removeClass('bg-success bg-danger text-white');
    header.addClass(exito ? 'bg-success text-white' : 'bg-danger text-white');

    $('#toast').toast('show');
  }
}
