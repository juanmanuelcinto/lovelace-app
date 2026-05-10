import { Component } from '@angular/core';

@Component({
  selector: 'app-quality',
  standalone: true,
  template: `
    <section class="quality-grid">
      <article class="panel">
        <p class="section-tag">Suite de pruebas</p>
        <h2>Alcance del entregable</h2>
        <ul>
          <li>Pruebas unitarias sobre el servicio de sesion y el componente de practica.</li>
          <li>Pruebas funcionales E2E con Playwright sobre navegacion y respuesta del alumno.</li>
          <li>Generacion de cobertura con ChromeHeadless.</li>
        </ul>
      </article>

      <article class="panel">
        <p class="section-tag">CI/CD</p>
        <h2>Pipeline automatizado</h2>
        <ul>
          <li><code>npm ci</code> para instalar dependencias de forma reproducible.</li>
          <li><code>npm run test:coverage</code> para validar calidad y cobertura.</li>
          <li><code>npm run test:e2e</code> para el flujo funcional completo.</li>
          <li><code>npm run build</code> para asegurar empaquetado correcto.</li>
        </ul>
      </article>

      <article class="panel">
        <p class="section-tag">Uso de IA</p>
        <h2>Justificacion</h2>
        <p>
          El proyecto esta preparado para documentar el uso de herramientas asistidas por IA
          en el diseno de escenarios, generacion inicial de tests y optimizacion de cobertura.
        </p>
      </article>
    </section>
  `,
  styles: [
    `
      .quality-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
      }

      .panel {
        background: rgba(8, 18, 32, 0.82);
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

      ul {
        margin: 0;
        padding-left: 1.1rem;
      }

      code {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 0.08rem 0.35rem;
      }

      li + li {
        margin-top: 0.55rem;
      }

      @media (max-width: 900px) {
        .quality-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class QualityComponent {}
