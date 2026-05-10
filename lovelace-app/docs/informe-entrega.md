# Informe de entrega

## 1. Introducción

El presente trabajo corresponde a la actividad práctica final orientada a automatización de pruebas asistida por IA, optimización de cobertura y ejecución continua mediante CI/CD. Para resolver la consigna se desarrolló un módulo funcional web llamado `LOVELACE`, construido con Angular, centrado en un escenario de aprendizaje de matemática con explicaciones, práctica y seguimiento de progreso.

## 2. Funcionalidad del módulo

El módulo implementado permite:

- navegar entre distintas secciones del sistema
- seleccionar temas de aprendizaje
- visualizar explicaciones adaptadas al tema elegido
- resolver ejercicios de opción múltiple
- recibir feedback inmediato
- observar métricas básicas de progreso y exactitud

## 3. Mapeo de escenarios

Escenarios funcionales identificados:

- ingreso a la aplicación y navegación entre vistas
- visualización de la pantalla resumen
- cambio de tema en la sección de explicaciones
- render de contenido coherente según el tema activo
- resolución de ejercicios correctos
- resolución de ejercicios incorrectos
- actualización del progreso luego de responder
- persistencia del estado en memoria durante la sesión

## 4. Estrategia de pruebas

Se definió una estrategia mixta:

- pruebas unitarias para validar lógica de negocio y comportamiento de componentes
- pruebas funcionales end-to-end para validar el flujo del usuario

### 4.1 Pruebas unitarias

Se implementaron pruebas sobre:

- `AppComponent`
- `LearningSessionService`
- `PracticeComponent`

Los casos cubren:

- creación correcta de componentes
- presencia de navegación principal
- selección inicial del tema
- recalculo de progreso luego de responder ejercicios
- cambio de tema y filtrado de ejercicios
- visualización de feedback inmediato en la UI

### 4.2 Pruebas funcionales

Se implementaron pruebas E2E con Playwright sobre:

- navegación desde inicio hacia práctica
- respuesta correcta de un ejercicio y verificación de exactitud
- cambio de tema en explicaciones y validación del contenido resultante

## 5. Uso de herramientas asistidas por IA

Se utilizó asistencia basada en IA para:

- acelerar el diseño inicial de casos de prueba
- detectar escenarios relevantes y posibles redundancias
- proponer estructura de cobertura razonable
- refinar selectores de pruebas E2E
- ayudar en la organización del pipeline de integración continua

La asistencia de IA permitió reducir tiempo de implementación y mejorar la consistencia de la suite, aunque todas las decisiones finales fueron validadas manualmente.

## 6. Optimización de la suite

La optimización aplicada consistió en:

- concentrar la lógica compartida en un servicio testeable
- evitar duplicación entre pruebas unitarias y funcionales
- usar unit tests para reglas de negocio y E2E para recorridos críticos
- corregir selectores ambiguos en pruebas E2E
- mantener una suite corta pero representativa para facilitar mantenimiento

## 7. Análisis de cobertura

Resultados obtenidos luego de implementar la suite:

- Statements: 92.68%
- Branches: 71.42%
- Functions: 92.3%
- Lines: 90.9%

Interpretación:

- la cobertura de statements, funciones y líneas es alta para el tamaño actual del módulo
- branches es el punto más bajo, lo que indica que todavía existen caminos condicionales que pueden ampliarse con nuevos tests
- el reporte HTML de cobertura quedó disponible en `coverage/lovelace-app/index.html`

## 8. CI/CD

Se implementó un pipeline en GitHub Actions que:

- instala dependencias
- ejecuta pruebas unitarias con cobertura
- ejecuta pruebas E2E
- compila la aplicación
- publica artefactos de cobertura y reportes de Playwright

Esto garantiza validación automática ante cada push o pull request.

## 9. Capturas de la ejecución de CI

Pendiente de completar luego del primer push al repositorio remoto.

Se deben adjuntar al informe:

- captura del workflow exitoso en GitHub Actions
- captura de los jobs ejecutados
- captura o enlace a los artefactos de cobertura

## 10. Reflexión crítica

La principal decisión técnica fue construir un módulo pequeño pero realista, con suficiente comportamiento para justificar una suite de pruebas completa. Angular permitió separar claramente estado, UI y navegación, lo cual favoreció la testabilidad.

El uso de Karma/Jasmine fue conveniente para pruebas unitarias por venir integrado con el ecosistema Angular. Playwright resultó adecuado para flujos E2E por su sintaxis clara, estabilidad y capacidad de correr de forma headless.

Como mejora futura, convendría:

- ampliar pruebas sobre respuestas incorrectas y reinicio de progreso
- conectar el frontend con una API real
- conservar evidencias automáticas del pipeline en cada release
- desplegar la aplicación en un servidor con HTTPS y monitoreo básico

## 11. Conclusión

El proyecto cumple con la consigna al integrar desarrollo del módulo, automatización de pruebas, cobertura, pipeline de CI/CD y documentación técnica. La base actual permite continuar con despliegue en servidor y evolución funcional sin rehacer la arquitectura de testing.
