import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LearningSessionService } from '../core/learning-session.service';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="layout">
      <aside class="topics">
        <h2>Trayectorias sugeridas</h2>
        @for (topic of session.topics(); track topic.id) {
          <button
            type="button"
            class="topic-button"
            [class.active]="topic.id === session.selectedTopicId()"
            (click)="session.selectTopic(topic.id)">
            <span>{{ topic.title }}</span>
            <small>{{ topic.level }}</small>
          </button>
        }
      </aside>

      <article class="lesson-card">
        <p class="section-tag">Explicacion adaptada</p>
        <h2>{{ session.activeTopic().title }}</h2>
        <p class="objective">{{ session.activeTopic().objective }}</p>

        <ol>
          @for (step of session.activeTopic().explanation; track step) {
            <li>{{ step }}</li>
          }
        </ol>

        <div class="hint">
          <h3>Pista visual</h3>
          <p>{{ session.activeTopic().visualHint }}</p>
        </div>
      </article>
    </section>
  `,
  styles: [
    `
      .layout {
        display: grid;
        gap: 1rem;
        grid-template-columns: minmax(220px, 320px) 1fr;
      }

      .topics,
      .lesson-card {
        background: rgba(8, 18, 32, 0.82);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        padding: 1.4rem;
      }

      .topics {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .topic-button {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 18px;
        color: #e7eef7;
        cursor: pointer;
        padding: 1rem;
        text-align: left;
      }

      .topic-button.active {
        background: rgba(120, 240, 184, 0.14);
        border-color: rgba(120, 240, 184, 0.45);
      }

      .topic-button span,
      .topic-button small {
        display: block;
      }

      .section-tag {
        color: #78f0b8;
        letter-spacing: 0.08em;
        margin: 0 0 0.5rem;
        text-transform: uppercase;
      }

      .objective {
        color: #b9c7d8;
      }

      ol {
        padding-left: 1.2rem;
      }

      li + li {
        margin-top: 0.6rem;
      }

      .hint {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 18px;
        margin-top: 1rem;
        padding: 1rem;
      }

      @media (max-width: 900px) {
        .layout {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class LessonComponent {
  protected readonly session = inject(LearningSessionService);
}
