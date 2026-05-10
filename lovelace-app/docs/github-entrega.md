# Publicación en GitHub

## 1. Inicializar repositorio

```bash
git init
git add .
git commit -m "Entrega inicial de LOVELACE"
```

## 2. Crear repositorio remoto

Crear un repositorio nuevo en GitHub y asociarlo:

```bash
git remote add origin <URL_DEL_REPO>
git branch -M main
git push -u origin main
```

## 3. Verificar CI

Luego del push:

- entrar a la pestaña `Actions`
- verificar que el workflow `ci` termine en verde
- descargar artefactos si hace falta adjuntarlos al informe

## 4. Evidencia para la entrega

Tomar capturas de:

- listado de archivos del repositorio
- workflow exitoso
- detalle del job con tests y build
- reporte de cobertura o artefactos

## 5. Recomendaciones

- no subir `node_modules`
- no subir `dist`
- no subir `coverage`
- mantener `package-lock.json` versionado
