import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  totalAlumnos = 3;
  promedioNotas = 81.3;

  rendimiento = [
    { nombre: 'Juan', real: 75, predicho: 78 },
    { nombre: 'Ana', real: 90, predicho: 88 },
    { nombre: 'Luis', real: 79, predicho: 80 },
  ];

  alumnos = [
    {
      nombre: 'Juan Pérez',
      notas: [70, 80, 75],
      asistencia: 85,
      participacion: 7,
      prediccion: 'Medio rendimiento',
    },
    {
      nombre: 'Ana López',
      notas: [92, 88, 90],
      asistencia: 98,
      participacion: 9,
      prediccion: 'Alto rendimiento',
    },
    {
      nombre: 'Luis García',
      notas: [78, 80, 79],
      asistencia: 87,
      participacion: 6,
      prediccion: 'Medio rendimiento',
    },
  ];
}
