# Despliegue

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

## Verificaciones posteriores

```bash
docker ps
docker logs lovelace-web
curl http://localhost
```

## Notas

- La app es estática luego del build, por lo que no requiere Node.js en runtime.
- Si se usa un subpath en vez de raíz `/`, habrá que ajustar `base href` en Angular.
