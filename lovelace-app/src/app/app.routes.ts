import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { LessonComponent } from './pages/lesson.component';
import { PracticeComponent } from './pages/practice.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'LOVELACE | Resumen' },
  { path: 'explicaciones', component: LessonComponent, title: 'LOVELACE | Explicaciones' },
  { path: 'practica', component: PracticeComponent, title: 'LOVELACE | Practica' },
  { path: '**', redirectTo: '' }
];
