import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PracticeComponent } from './practice.component';
import { LearningSessionService } from '../core/learning-session.service';

describe('PracticeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeComponent]
    }).compileComponents();
  });

  it('renders the exercise for the selected topic', () => {
    const fixture = TestBed.createComponent(PracticeComponent);
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Cual de estas fracciones es equivalente a 1/2?');
  });

  it('shows feedback after answering and updates progress', () => {
    const fixture = TestBed.createComponent(PracticeComponent);
    const service = TestBed.inject(LearningSessionService);
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('[data-testid="option-fra-1-a"]'));
    button.triggerEventHandler('click');
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;
    expect(text).toContain('Respuesta correcta');
    expect(service.progressSummary().answeredExercises).toBe(1);
    expect(service.progressSummary().accuracyPercentage).toBe(100);
  });
});
