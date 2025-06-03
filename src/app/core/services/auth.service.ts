import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private BASE_URL = 'http://127.0.0.1:8080';
  public BASE_URL = 'http://127.0.0.1:8000';
  private tokenKey = 'authToken';

  //private REFRESH_URL = 'http://127.0.0.1:8080/auth/refresh';
  private REFRESH_URL = 'http://127.0.0.1:8000/api/token/refresh/';
  private refreshTokenKey = 'refreshToken';

  private rol = 'role';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/api/auth/token/`;
    return this.httpClient.post<any>(url, { username, password }).pipe(
      tap((response) => {
        if (response.access) {
          console.log('RESPONSE', response);

          this.setToken(response.access);

          this.setRefreshToken(response.refresh);
          this.autoRefreshToken();
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    } else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey); // o lo que uses para saber si hay sesión
  }

  private setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  private getRefreshToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(this.refreshTokenKey);
    } else {
      return null;
    }
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    return this.httpClient.post<any>(this.REFRESH_URL, { refreshToken }).pipe(
      tap((response) => {
        if (response.token) {
          console.log(response.token);
          this.setToken(response.token);
          this.setRefreshToken(response.refreshToken);
          this.autoRefreshToken();
        }
      })
    );
  }

  autoRefreshToken(): void {
    const token = this.getToken();
    if (!token) {
      return;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;

    const timeout = exp - Date.now() - 60 * 1000;

    setTimeout(() => {
      this.refreshToken().subscribe();
    }, timeout);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    //ORIGINAL

    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }

  //Usuario
  async obtenerTodosLosUsuarios(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  crearUsuario(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    //return this.httpClient.post(`${this.BASE_URL}/api/register/`, data, { headers });

    try {
      const response = this.httpClient.post(
        `${this.BASE_URL}/api/usuarios/`,
        data,
        { headers }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  obtenerUsuarioPorId(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    const url = `${this.BASE_URL}/api/usuarios/${id}/`; // Ajusta si tu endpoint difiere

    try {
      const response = this.httpClient.get<any>(url, { headers });
      return response;
    } catch (error) {
      throw error;
    }
  }

  actualizarUsuarioPorId(id: number, data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    const url = `${this.BASE_URL}/api/usuarios/${id}/`; // Ajusta si tu endpoint difiere

    return this.httpClient.patch<any>(url, data, { headers });
  }

  eliminarUsuario(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpClient.delete(`${this.BASE_URL}/api/usuarios/${id}/`, {
      headers,
    });
  }

  //Profesor
  async allProfesorPaginated(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      //console.log('Auth-profesores:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  //Alumnos
  async allAlumnoPaginated(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      //console.log('Auth-profesores:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  //Periodo
  async allPeriodoPaginated(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      //console.log('Auth-profesores:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  //Periodo
  async allGradoPaginated(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      //console.log('Auth-profesores:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  //Materia
  async allMateriaPaginated(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      //console.log('Auth-profesores:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  //Aulas
  async allAulaPaginated(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      //console.log('Auth-profesores:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  //Predicciones de rendimiento
  async allPrediccionPaginated(url: string, token: string): Promise<any> {
    //const url = `${this.BASE_URL}/api/users/`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    try {
      const response = this.httpClient.get<any>(url, { headers }).toPromise();
      //console.log('Auth-profesores:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
