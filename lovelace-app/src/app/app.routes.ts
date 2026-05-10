import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { LessonComponent } from './pages/lesson.component';
import { PracticeComponent } from './pages/practice.component';
import { QualityComponent } from './pages/quality.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'LOVELACE | Resumen' },
  { path: 'explicaciones', component: LessonComponent, title: 'LOVELACE | Explicaciones' },
  { path: 'practica', component: PracticeComponent, title: 'LOVELACE | Practica' },
  { path: 'calidad', component: QualityComponent, title: 'LOVELACE | Calidad' },
  { path: '**', redirectTo: '' }
];
