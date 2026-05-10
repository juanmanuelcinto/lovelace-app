import { Injectable, computed, signal } from '@angular/core';

export interface TopicContent {
  id: string;
  title: string;
  level: string;
  objective: string;
  explanation: string[];
  visualHint: string;
}

export interface ExerciseOption {
  id: string;
  label: string;
}

export interface Exercise {
  id: string;
  topicId: string;
  competency: string;
  prompt: string;
  options: ExerciseOption[];
  correctOptionId: string;
  feedback: string;
}

export interface ExerciseAttempt {
  exerciseId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}

@Injectable({ providedIn: 'root' })
export class LearningSessionService {
  private readonly topicsCatalog: TopicContent[] = [
    {
      id: 'fracciones',
      title: 'Fracciones equivalentes',
      level: 'Nivel inicial',
      objective: 'Reconocer que distintas representaciones pueden indicar la misma cantidad.',
      explanation: [
        'Si multiplicas numerador y denominador por el mismo numero, la fraccion conserva su valor.',
        'Dos cuartos representan la misma porcion que un medio, aunque se divida la figura de forma distinta.',
        'Antes de resolver ejercicios, conviene comparar visualmente las partes coloreadas.'
      ],
      visualHint: 'Imaginar una pizza partida en 2 y luego en 4 partes ayuda a ver por que 1/2 y 2/4 son equivalentes.'
    },
    {
      id: 'ecuaciones',
      title: 'Ecuaciones lineales',
      level: 'Nivel medio',
      objective: 'Despejar la incognita manteniendo el equilibrio de ambos lados.',
      explanation: [
        'Una ecuacion funciona como una balanza: lo que haces en un lado debe repetirse en el otro.',
        'Primero se eliminan sumas o restas; despues se resuelve multiplicacion o division.',
        'Comprobar el resultado reemplazando el valor final reduce errores de procedimiento.'
      ],
      visualHint: 'Pensar la ecuacion como una balanza evita mover terminos sin justificar la operacion.'
    },
    {
      id: 'geometria',
      title: 'Area de rectangulos',
      level: 'Nivel inicial',
      objective: 'Relacionar area con cantidad de unidades cuadradas que cubren una superficie.',
      explanation: [
        'El area de un rectangulo se obtiene multiplicando base por altura.',
        'Las unidades deben ser consistentes: centimetros por centimetros da centimetros cuadrados.',
        'Dibujar una grilla mental permite interpretar por que la formula funciona.'
      ],
      visualHint: 'Visualizar filas y columnas de cuadrados hace evidente la multiplicacion base por altura.'
    }
  ];

  private readonly exercisesCatalog: Exercise[] = [
    {
      id: 'fra-1',
      topicId: 'fracciones',
      competency: 'Reconocimiento de equivalencias',
      prompt: 'Cual de estas fracciones es equivalente a 1/2?',
      options: [
        { id: 'a', label: '2/4' },
        { id: 'b', label: '3/5' },
        { id: 'c', label: '4/10' }
      ],
      correctOptionId: 'a',
      feedback: '2/4 es equivalente a 1/2 porque ambas representan la misma proporcion.'
    },
    {
      id: 'ecu-1',
      topicId: 'ecuaciones',
      competency: 'Despeje de incognita',
      prompt: 'Si x + 5 = 12, cuanto vale x?',
      options: [
        { id: 'a', label: '17' },
        { id: 'b', label: '7' },
        { id: 'c', label: '5' }
      ],
      correctOptionId: 'b',
      feedback: 'Restar 5 en ambos lados deja x = 7.'
    },
    {
      id: 'geo-1',
      topicId: 'geometria',
      competency: 'Calculo de area',
      prompt: 'Cual es el area de un rectangulo de base 6 cm y altura 4 cm?',
      options: [
        { id: 'a', label: '10 cm2' },
        { id: 'b', label: '20 cm2' },
        { id: 'c', label: '24 cm2' }
      ],
      correctOptionId: 'c',
      feedback: 'El area se calcula multiplicando 6 por 4, por lo tanto el resultado es 24 cm2.'
    }
  ];

  readonly student = signal({
    name: 'Alicia',
    institution: 'Colegio Lovelace',
    course: '2do ano',
    nextAssessment: '2026-05-24',
    strengths: ['Curiosidad', 'Aprendizaje visual'],
    focusAreas: ['Fracciones equivalentes', 'Despeje de ecuaciones']
  });

  readonly selectedTopicId = signal(this.topicsCatalog[0].id);
  readonly attempts = signal<Record<string, ExerciseAttempt>>({});
  readonly topics = signal(this.topicsCatalog);
  readonly exercises = signal(this.exercisesCatalog);

  readonly activeTopic = computed(
    () => this.topics().find((topic) => topic.id === this.selectedTopicId()) ?? this.topicsCatalog[0]
  );

  readonly activeExercises = computed(() =>
    this.exercises().filter((exercise) => exercise.topicId === this.selectedTopicId())
  );

  readonly progressSummary = computed(() => {
    const attempts = Object.values(this.attempts());
    const totalExercises = this.exercises().length;
    const correctAnswers = attempts.filter((attempt) => attempt.isCorrect).length;
    const answeredExercises = attempts.length;

    return {
      totalExercises,
      answeredExercises,
      correctAnswers,
      completionPercentage: Math.round((answeredExercises / totalExercises) * 100),
      accuracyPercentage: answeredExercises === 0 ? 0 : Math.round((correctAnswers / answeredExercises) * 100)
    };
  });

  selectTopic(topicId: string): void {
    this.selectedTopicId.set(topicId);
  }

  submitAnswer(exerciseId: string, selectedOptionId: string): ExerciseAttempt {
    const exercise = this.exercises().find((item) => item.id === exerciseId);

    if (!exercise) {
      throw new Error(`Exercise ${exerciseId} was not found`);
    }

    const attempt: ExerciseAttempt = {
      exerciseId,
      selectedOptionId,
      isCorrect: exercise.correctOptionId === selectedOptionId
    };

    this.attempts.update((current) => ({ ...current, [exerciseId]: attempt }));
    return attempt;
  }

  getAttempt(exerciseId: string): ExerciseAttempt | null {
    return this.attempts()[exerciseId] ?? null;
  }

  resetProgress(): void {
    this.attempts.set({});
    this.selectedTopicId.set(this.topicsCatalog[0].id);
  }
}
