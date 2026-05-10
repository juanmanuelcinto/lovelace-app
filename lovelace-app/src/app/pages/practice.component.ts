import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LearningSessionService } from '../core/learning-session.service';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="practice-header">
      <div>
        <p class="section-tag">Feedback inmediato</p>
        <h2>Practica guiada</h2>
        <p>El alumno responde un ejercicio por tema y el modulo actualiza el progreso en tiempo real.</p>
      </div>

      <div class="summary">
        <span data-testid="progress-completion">Cobertura: {{ session.progressSummary().completionPercentage }}%</span>
        <span data-testid="progress-accuracy">Exactitud: {{ session.progressSummary().accuracyPercentage }}%</span>
      </div>
    </section>

    <section class="topic-switcher">
      @for (topic of session.topics(); track topic.id) {
        <button
          type="button"
          [class.active]="topic.id === session.selectedTopicId()"
          (click)="session.selectTopic(topic.id)">
          {{ topic.title }}
        </button>
      }
    </section>

    <section class="exercise-grid">
      @for (exercise of session.activeExercises(); track exercise.id) {
        <article class="exercise-card" [attr.data-testid]="'exercise-' + exercise.id">
          <p class="competency">{{ exercise.competency }}</p>
          <h3>{{ exercise.prompt }}</h3>

          <div class="options">
            @for (option of exercise.options; track option.id) {
              <button
                type="button"
                class="option"
                [attr.data-testid]="'option-' + exercise.id + '-' + option.id"
                (click)="submit(exercise.id, option.id)">
                {{ option.label }}
              </button>
            }
          </div>

          @if (session.getAttempt(exercise.id); as attempt) {
            <div class="feedback" [class.feedback-ok]="attempt.isCorrect" [class.feedback-error]="!attempt.isCorrect">
              <strong>{{ attempt.isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta' }}</strong>
              <p>{{ exercise.feedback }}</p>
            </div>
          }
        </article>
      }
    </section>
  `,
  styles: [
    `
      .practice-header,
      .exercise-card,
      .topic-switcher {
        background: rgba(8, 18, 32, 0.82);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
      }

      .practice-header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
        padding: 1.4rem;
      }

      .section-tag,
      .competency {
        color: #78f0b8;
        letter-spacing: 0.08em;
        margin: 0 0 0.5rem;
        text-transform: uppercase;
      }

      .summary {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .topic-switcher {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 1rem;
        padding: 1rem;
      }

      .topic-switcher button,
      .option {
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 999px;
        color: #e7eef7;
        cursor: pointer;
        padding: 0.8rem 1rem;
      }

      .topic-switcher button.active,
      .option:hover {
        background: rgba(120, 240, 184, 0.14);
        border-color: rgba(120, 240, 184, 0.45);
      }

      .exercise-grid {
        display: grid;
        gap: 1rem;
      }

      .exercise-card {
        padding: 1.4rem;
      }

      .options {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .feedback {
        border-radius: 18px;
        margin-top: 1rem;
        padding: 1rem;
      }

      .feedback p,
      .feedback strong {
        margin: 0;
      }

      .feedback p {
        margin-top: 0.4rem;
      }

      .feedback-ok {
        background: rgba(120, 240, 184, 0.14);
      }

      .feedback-error {
        background: rgba(255, 166, 77, 0.16);
      }

      @media (max-width: 900px) {
        .practice-header {
          align-items: start;
          flex-direction: column;
        }
      }
    `
  ]
})
export class PracticeComponent {
  protected readonly session = inject(LearningSessionService);

  protected submit(exerciseId: string, optionId: string): void {
    this.session.submitAnswer(exerciseId, optionId);
  }
}
