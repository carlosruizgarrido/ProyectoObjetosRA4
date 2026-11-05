# Proyecto Objetos RA4

Aplicación de consola desarrollada con TypeScript para gestionar productos, electrodomésticos, equipos informáticos e inventario.

## Estructura del proyecto

```text
.
├── Main.ts               # Punto de entrada de la aplicación
├── Producto.ts           # Clase base de los productos
├── Electrodomestico.ts   # Productos con consumo energético y garantía
├── EquipoInformatico.ts  # Productos con RAM y procesador
├── Inventario.ts         # Gestión del inventario
├── Dockerfile            # Configuración de la imagen Docker
├── docker-compose.yml    # Configuración de Docker Compose
├── .dockerignore         # Archivos excluidos de la imagen
└── README.md
```

## Tecnologías

- TypeScript
- Node.js 22
- Docker
- Docker Compose
- `tsx` para ejecutar TypeScript directamente

## Ejecución con Docker

### Requisitos

Tener Docker Desktop instalado y en ejecución.

### Construir y ejecutar

Desde la carpeta del proyecto:

```bash
docker compose up --build
```

La opción `--build` construye la imagen usando el `Dockerfile`. El programa se ejecuta automáticamente mediante el comando:

```text
tsx Main.ts
```

### Ejecutar sin reconstruir

Si no se ha modificado el `Dockerfile`:

```bash
docker compose up
```

### Detener los contenedores

```bash
docker compose down
```

El proyecto se monta dentro del contenedor en `/app`, por lo que los cambios en los ficheros TypeScript se reflejan al volver a ejecutar el servicio.

## Ejecución sin Docker

Requiere Node.js 18 o superior:

```bash
npx tsx ./Main.ts
```

## Autor

Carlos Manuel Ruiz Garrido — 2.º DAW.
