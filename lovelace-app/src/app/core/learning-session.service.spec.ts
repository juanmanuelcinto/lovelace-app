import { TestBed } from '@angular/core/testing';
import { LearningSessionService } from './learning-session.service';

describe('LearningSessionService', () => {
  let service: LearningSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningSessionService);
  });

  it('starts with the first topic selected', () => {
    expect(service.activeTopic().id).toBe('fracciones');
    expect(service.progressSummary().answeredExercises).toBe(0);
  });

  it('tracks answers and recalculates progress', () => {
    service.submitAnswer('fra-1', 'a');
    service.submitAnswer('ecu-1', 'c');

    const summary = service.progressSummary();
    expect(summary.answeredExercises).toBe(2);
    expect(summary.correctAnswers).toBe(1);
    expect(summary.completionPercentage).toBe(67);
    expect(summary.accuracyPercentage).toBe(50);
  });

  it('switches the active topic and exposes only matching exercises', () => {
    service.selectTopic('geometria');

    expect(service.activeTopic().title).toContain('Area');
    expect(service.activeExercises().length).toBe(1);
    expect(service.activeExercises()[0].id).toBe('geo-1');
  });
});
