# LOVELACE

Aplicación Angular desarrollada como entrega de la actividad práctica final sobre automatización de pruebas, cobertura, CI/CD y uso de herramientas asistidas por IA.

## Objetivo del proyecto

El módulo funcional implementa una SPA educativa orientada a matemática. La aplicación incluye:

- Explicaciones adaptativas por tema.
- Ejercicios con feedback inmediato.
- Seguimiento de progreso del alumno.
- Sección de calidad para exponer el enfoque de testing y CI.

El proyecto fue diseñado para cumplir la actividad práctica final, priorizando un módulo testeable y desplegable.

## Stack técnico

- Angular 19.2.x
- TypeScript
- Karma + Jasmine para pruebas unitarias
- Playwright para pruebas funcionales E2E
- GitHub Actions para CI
- Docker + Nginx para despliegue estático

## Requisitos

- Node.js 18.19.1 o superior
- npm 9 o superior
- Google Chrome disponible para `ChromeHeadless`

## Scripts principales

```bash
npm start
npm run build
npm run test:unit
npm run test:coverage
npm run test:e2e
```

## Estructura relevante

```text
src/app/core/learning-session.service.ts   Logica de negocio y estado
src/app/pages/                              Pantallas funcionales
e2e/lovelace.spec.ts                        Pruebas funcionales
.github/workflows/ci.yml                    Pipeline CI
docs/informe-entrega.md                     Informe base para presentar
docs/deploy.md                              Guia de despliegue
```

## Validación realizada

Comandos ejecutados localmente:

```bash
npm run build
npm run test:unit
npm run test:e2e
npm run test:coverage
```

Cobertura actual:

- Statements: 92.68%
- Branches: 71.42%
- Functions: 92.3%
- Lines: 90.9%

Reporte HTML:

- `coverage/lovelace-app/index.html`

## CI/CD

El workflow de GitHub Actions:

- instala dependencias con `npm ci`
- ejecuta pruebas unitarias con cobertura
- ejecuta pruebas E2E
- compila la aplicación
- publica artefactos de cobertura y reportes de Playwright

## Despliegue

Hay una opción lista para servidor con Docker y Nginx:

```bash
docker build -t lovelace-app .
docker run -p 8080:80 lovelace-app
```

Ver detalle en `docs/deploy.md`.
