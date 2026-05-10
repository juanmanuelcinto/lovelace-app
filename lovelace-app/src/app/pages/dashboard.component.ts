import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LearningSessionService } from '../core/learning-session.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe],
  template: `
    <section class="hero">
      <div class="hero-copy">
        <p class="section-tag">Asistente de aprendizaje</p>
        <h2>Aprendizaje adaptativo con explicaciones, practica y seguimiento.</h2>
        <p>
          LOVELACE acompaña el aprendizaje de matemática con contenidos guiados,
          práctica inmediata y una lectura simple del progreso del alumno.
        </p>
      </div>

      <div class="hero-card">
        <h3>Contexto del alumno</h3>
        <p><strong>Alumno:</strong> {{ session.student().name }}</p>
        <p><strong>Curso:</strong> {{ session.student().course }}</p>
        <p><strong>Institucion:</strong> {{ session.student().institution }}</p>
        <p><strong>Proxima evaluacion:</strong> {{ session.student().nextAssessment | date:'longDate' }}</p>
      </div>
    </section>

    <section class="metrics">
      <article>
        <span>Temas activos</span>
        <strong>{{ session.topics().length }}</strong>
      </article>
      <article>
        <span>Ejercicios respondidos</span>
        <strong>{{ session.progressSummary().answeredExercises }}/{{ session.progressSummary().totalExercises }}</strong>
      </article>
      <article>
        <span>Exactitud actual</span>
        <strong>{{ session.progressSummary().accuracyPercentage }}%</strong>
      </article>
      <article>
        <span>Estilo de aprendizaje</span>
        <strong>Visual y guiado</strong>
      </article>
    </section>

    <section class="grid">
      <article class="panel">
        <h3>Experiencia principal</h3>
        <ul>
          <li>Navegacion clara entre resumen, explicaciones y practica.</li>
          <li>Seleccion de temas segun necesidad del alumno.</li>
          <li>Resolucion de ejercicios con devolucion inmediata.</li>
          <li>Seguimiento simple del avance y la exactitud.</li>
        </ul>
      </article>

      <article class="panel">
        <h3>Proximas mejoras</h3>
        <ul>
          <li>Mas ejercicios por tema y dificultad progresiva.</li>
          <li>Seguimiento historico del rendimiento del alumno.</li>
          <li>Integracion con servicios externos de contenido y evaluacion.</li>
        </ul>
      </article>
    </section>

    <section class="cta">
      <a routerLink="/explicaciones">Ver explicaciones</a>
      <a routerLink="/practica">Resolver practica</a>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .hero,
      .grid,
      .metrics {
        display: grid;
        gap: 1rem;
      }

      .hero {
        grid-template-columns: 2fr 1fr;
        margin-bottom: 1rem;
      }

      .hero-copy,
      .hero-card,
      .panel,
      .metrics article {
        background: rgba(8, 18, 32, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        padding: 1.4rem;
      }

      .section-tag {
        color: #78f0b8;
        letter-spacing: 0.08em;
        margin: 0 0 0.5rem;
        text-transform: uppercase;
      }

      h2 {
        font-size: clamp(1.8rem, 3vw, 3rem);
        margin: 0 0 0.8rem;
      }

      .metrics {
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 1rem;
      }

      .metrics article span {
        color: #8ca0b7;
        display: block;
        margin-bottom: 0.35rem;
      }

      .metrics article strong {
        font-size: 1.3rem;
      }

      .grid {
        grid-template-columns: repeat(2, 1fr);
      }

      ul {
        margin: 0;
        padding-left: 1.1rem;
      }

      li + li {
        margin-top: 0.5rem;
      }

      .cta {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
      }

      .cta a {
        background: #78f0b8;
        border-radius: 999px;
        color: #07101c;
        font-weight: 700;
        padding: 0.85rem 1.2rem;
        text-decoration: none;
      }

      .cta a:last-child {
        background: transparent;
        border: 1px solid rgba(120, 240, 184, 0.45);
        color: #e7eef7;
      }

      @media (max-width: 900px) {
        .hero,
        .grid,
        .metrics {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class DashboardComponent {
  protected readonly session = inject(LearningSessionService);
}
