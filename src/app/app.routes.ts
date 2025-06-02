import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './business/authentication/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
//import { authenticatedGuard } from './core/guards/authenticated.guard';

/////
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
////

//ADMINISTRAR USUARIO
//usuario
import { ListusuarioComponent } from './business/usuario/usuario/listusuario/listusuario.component';
import { RegisterusuarioComponent } from './business/usuario/usuario/registerusuario/registerusuario.component';
import { UpdateusuarioComponent } from './business/usuario/usuario/updateusuario/updateusuario.component';
//Profesor
import { ListprofesorComponent } from './business/usuario/profesor/listprofesor/listprofesor.component';
import { RegisterprofesorComponent } from './business/usuario/profesor/registerprofesor/registerprofesor.component';
import { UpdateprofesorComponent } from './business/usuario/profesor/updateprofesor/updateprofesor.component';

//ADMINISTRACION ACADEMICA
//aula
import { ListaulaComponent } from './business/academica/aula/listaula/listaula.component';
import { RegisteraulaComponent } from './business/academica/aula/registeraula/registeraula.component';
import { UpdateaulaComponent } from './business/academica/aula/updateaula/updateaula.component';
//gestion
import { ListgestionComponent } from './business/academica/gestion/listgestion/listgestion.component';
import { RegistergestionComponent } from './business/academica/gestion/registergestion/registergestion.component';
import { UpdategestionComponent } from './business/academica/gestion/updategestion/updategestion.component';
//grado
import { ListgradoComponent } from './business/academica/grado/listgrado/listgrado.component';
import { RegistergradoComponent } from './business/academica/grado/registergrado/registergrado.component';
import { UpdategradoComponent } from './business/academica/grado/updategrado/updategrado.component';
//materia
import { ListmateriaComponent } from './business/academica/materia/listmateria/listmateria.component';
import { RegistermateriaComponent } from './business/academica/materia/registermateria/registermateria.component';
import { UpdatemateriaComponent } from './business/academica/materia/updatemateria/updatemateria.component';
//periodo
import { ListperiodoComponent } from './business/academica/periodo/listperiodo/listperiodo.component';
import { RegisterperiodoComponent } from './business/academica/periodo/registerperiodo/registerperiodo.component';
import { UpdateperiodoComponent } from './business/academica/periodo/updateperiodo/updateperiodo.component';

//GESTION DE INSCRIPCIONES
//alumno
import { ListalumnoComponent } from './business/inscripcion/alumno/listalumno/listalumno.component';
import { RegisteralumnoComponent } from './business/inscripcion/alumno/registeralumno/registeralumno.component';
import { UpdatealumnoComponent } from './business/inscripcion/alumno/updatealumno/updatealumno.component';
//apoderado
import { ListapoderadoComponent } from './business/inscripcion/apoderado/listapoderado/listapoderado.component';
import { RegisterapoderadoComponent } from './business/inscripcion/apoderado/registerapoderado/registerapoderado.component';
import { UpdateapoderadoComponent } from './business/inscripcion/apoderado/updateapoderado/updateapoderado.component';

//prediccion de rendimiento
import { ListprediccionComponent } from './business/evaluacionesyrendimiento/prediccion/listprediccion/listprediccion.component';
import { GenerarprediccionComponent } from './business/evaluacionesyrendimiento/prediccion/generarprediccion/generarprediccion.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '', // será reemplazado dinámicamente por el redirect guard
    resolve: {
      redirect: () => {
        const authService = inject(AuthService);
        const router = inject(Router);
        const isLoggedIn = authService.isLoggedIn(); // o verifica token en localStorage
        return isLoggedIn
          ? router.parseUrl('/dashboard')
          : router.parseUrl('/login');
      },
    },
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      //Dashboard
      { path: 'dashboard', component: DashboardComponent },

      { path: 'enProceso', component: HeaderComponent },

      //ADMINISTRAR USUARIO
      //usuario
      { path: 'usuarios', component: ListusuarioComponent },
      { path: 'usuarios/create', component: RegisterusuarioComponent },
      { path: 'usuarios/edit/:id', component: UpdateusuarioComponent },
      //usuario
      { path: 'profesores', component: ListprofesorComponent },
      { path: 'profesores/create', component: RegisterprofesorComponent },
      { path: 'profesores/edit/:id', component: UpdateprofesorComponent },

      //ADMINISTRACION ACADEMICA
      //aula
      { path: 'aulas', component: ListaulaComponent },
      { path: 'aulas/create', component: RegisteraulaComponent },
      { path: 'aulas/edit/:id', component: UpdateaulaComponent },
      //gestiones
      { path: 'gestiones', component: ListgestionComponent },
      { path: 'gestiones/create', component: RegistergestionComponent },
      { path: 'gestiones/edit/:id', component: UpdategestionComponent },
      //grado
      { path: 'grado', component: ListgradoComponent },
      { path: 'grado/create', component: RegistergradoComponent },
      { path: 'grado/edit/:id', component: UpdategradoComponent },
      //materias
      { path: 'materias', component: ListmateriaComponent },
      { path: 'materias/create', component: RegistermateriaComponent },
      { path: 'materias/edit/:id', component: UpdatemateriaComponent },
      //periodo
      { path: 'periodo', component: ListperiodoComponent },
      { path: 'periodo/create', component: RegisterperiodoComponent },
      { path: 'periodo/edit/:id', component: UpdateperiodoComponent },

      //GESTION DE INSCRIPCIONES
      //alumnos
      { path: 'alumnos', component: ListalumnoComponent },
      { path: 'alumnos/create', component: RegisteralumnoComponent },
      { path: 'alumnos/edit/:id', component: UpdatealumnoComponent },
      //apoderados
      { path: 'apoderados', component: ListapoderadoComponent },
      { path: 'apoderados/create', component: RegisterapoderadoComponent },
      { path: 'apoderados/edit/:id', component: UpdateapoderadoComponent },

      //prediccion
      { path: 'predicciones', component: ListprediccionComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard' },
];
