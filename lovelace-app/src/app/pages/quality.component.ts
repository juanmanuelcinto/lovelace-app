import { Component } from '@angular/core';

@Component({
  selector: 'app-quality',
  standalone: true,
  template: `
    <section class="quality-grid">
      <article class="panel">
        <p class="section-tag">Calidad del producto</p>
        <h2>Verificaciones clave</h2>
        <ul>
          <li>Comprobacion de logica en el servicio de sesion y en la pantalla de practica.</li>
          <li>Validacion del recorrido principal del alumno entre vistas y ejercicios.</li>
          <li>Seguimiento de cobertura para sostener una base confiable.</li>
        </ul>
      </article>

      <article class="panel">
        <p class="section-tag">Operación técnica</p>
        <h2>Automatizacion del proyecto</h2>
        <ul>
          <li><code>npm ci</code> para instalar dependencias de forma reproducible.</li>
          <li><code>npm run test:coverage</code> para validar estabilidad y cobertura.</li>
          <li><code>npm run test:e2e</code> para revisar el flujo funcional completo.</li>
          <li><code>npm run build</code> para asegurar empaquetado correcto.</li>
        </ul>
      </article>

      <article class="panel">
        <p class="section-tag">Criterio de diseño</p>
        <h2>Enfoque adoptado</h2>
        <p>
          La aplicacion fue organizada para mantener una experiencia clara para el alumno y una
          base tecnica facil de extender, probar y desplegar.
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
