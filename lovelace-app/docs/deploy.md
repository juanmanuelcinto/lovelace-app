# Despliegue

## Opción GitHub Pages

El repositorio ya quedó preparado con un workflow para publicar la app en GitHub Pages.

URL esperada del sitio:

- `https://juanmanuelcinto.github.io/lovelace-app/`

Pasos en GitHub:

1. Ir a `Settings > Pages`
2. En `Source`, elegir `GitHub Actions`
3. Hacer push a `main` o ejecutar manualmente el workflow `pages`
4. Esperar a que termine el deploy

Notas:

- el workflow compila Angular con `base-href /lovelace-app/`
- también genera un `404.html` para tolerar recargas directas en rutas internas
- el archivo del workflow está en `.github/workflows/pages.yml`

## Opción recomendada: Docker + Nginx

El proyecto incluye un `Dockerfile` multistage para compilar Angular y servir el contenido estático con Nginx.

### Build local

```bash
docker build -t lovelace-app .
```

### Ejecución local

```bash
docker run --rm -p 8080:80 lovelace-app
```

Abrir:

- `http://localhost:8080`

## Despliegue en un servidor Linux

### 1. Instalar Docker

Seguir la documentación oficial del sistema operativo destino.

### 2. Subir el repositorio

```bash
git clone <URL_DEL_REPO>
cd lovelace-app
```

### 3. Construir la imagen

```bash
docker build -t lovelace-app .
```

### 4. Ejecutar el contenedor

```bash
docker run -d --name lovelace-web -p 80:80 --restart always lovelace-app
```

## Opción con reverse proxy

Si el servidor usa Nginx o Traefik como reverse proxy general:

- correr el contenedor en un puerto interno, por ejemplo `8080`
- exponer el dominio mediante el proxy
- agregar HTTPS con Let's Encrypt
- conservar los headers de seguridad definidos en `nginx/default.conf`

## Verificaciones posteriores

```bash
docker ps
docker logs lovelace-web
curl http://localhost
```

## Notas

- La app es estática luego del build, por lo que no requiere Node.js en runtime.
- Si se usa un subpath en vez de raíz `/`, habrá que ajustar `base href` en Angular.
- La configuración Nginx incluye `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` y `Permissions-Policy`.
