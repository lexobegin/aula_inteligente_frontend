import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) return;

    console.log('Formulario válido:', this.loginForm.value);
    console.log('Formulario válido:', this.loginForm.value.username);
  }

  login(): void {
    this.submitted = true;

    if (this.loginForm.invalid) return;

    console.log('Formulario válido:', this.loginForm.value);

    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (response) => {
          console.log('FROM-LOGIN: ', response);
          this.router.navigate(['/dashboard']);
          /*if (response.statusCode === 200) {
            this.router.navigate(['/dashboard']);
          }

          if (response.statusCode === 500) {
            console.log('ERROR:500:Error de login. Verifica tus credenciales.');
          }*/
        },
        error: (err) => {
          console.error('Login failed', err);
        },
      });
  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
