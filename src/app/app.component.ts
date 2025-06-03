import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { CommonModule } from '@angular/common';

declare var $: any; // Para usar jQuery con Bootstrap 4.6

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aula_inteligente_frontend';

  appReady = false;

  constructor(private authService: AuthService) {
    // Simulación: podrías esperar a que se resuelva el estado del login
    setTimeout(() => {
      this.appReady = true;
    }, 300); // Simula carga real (como chequear token en localStorage o API)
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
