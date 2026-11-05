# Inventario de productos con TypeScript

Proyecto de la unidad 3 (Objetos) del módulo **Desarrollo Web en Entorno Cliente** de 2º DAW (IES Camas).

Programa en TypeScript que modela un inventario de productos mediante objetos: Lista los artículos con sus unidades, calcula el valor total del inventario y aplica descuentos a los precios.

## Qué hace

- Muestra el inventario con el nombre y las unidades de cada producto.
- Calcula el valor total del inventario.
- Aplica descuentos y muestra el precio resultante de cada producto afectado.

### Ejemplo de salida

```
Inventario:
- Iphone 18: 1 unidad(es)
- Iphone 18 pro max: 1 unidad(es)
- Samsung Galaxy S30: 1 unidad(es)
- Lavadora: 1 unidad(es)
- Frigorífico: 1 unidad(es)
- Microondas: 1 unidad(es)
- Portátil: 1 unidad(es)
- PC de sobremesa: 1 unidad(es)
- Tablet: 1 unidad(es)
Valor total del inventario: $11900.00
--------------------------------------------------
Precio de Iphone 18 después del descuento: $1530.00
Precio de Lavadora después del descuento: $640.00
...
```

## Tecnologías

- TypeScript
- Node.js 22
- [tsx](https://tsx.is/) para ejecutar TypeScript directamente, sin compilar
- Docker y Docker Compose (opcional)

## Cómo ejecutarlo

Hay dos formas. La primera no requiere instalar nada más que Docker.

### Opción 1: con Docker (recomendada)

Requisitos: [Docker](https://www.docker.com/products/docker-desktop/) instalado y en marcha.

```bash
git clone https://github.com/carlosruizgarrido/ProyectoObjetosRA4
cd ProyectoObjetosRA4
docker compose up --build
```

Todo (Node, TypeScript y tsx) se instala dentro del contenedor. Al terminar, el contenedor se detiene solo porque el programa acaba su ejecución.

Para volver a lanzarlo sin reconstruir la imagen:

```bash
docker compose up
```

Para limpiar los contenedores:

```bash
docker compose down
```

### Opción 2: sin Docker

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
git clone https://github.com/carlosruizgarrido/ProyectoObjetosRA4
cd ProyectoObjetosRA4
npx tsx ./Main.ts
```

`npx` descarga `tsx` la primera vez que se ejecuta.

## Estructura del proyecto

```
.
├── Main.ts              # Punto de entrada del programa
├── Dockerfile           # Imagen con Node, TypeScript y tsx
├── docker-compose.yml   # Orquestación para ejecutarlo con un solo comando
├── .dockerignore        # Archivos excluidos de la imagen
└── README.md
```

> Si el proyecto tiene más archivos `.ts` (clases, interfaces...), se importan desde `Main.ts`.

## Solución de problemas

- **`docker: command not found` o error de conexión con el daemon**: Docker Desktop no está instalado o no está abierto.
- **Los cambios en el código no se reflejan**: el `docker-compose.yml` monta la carpeta del proyecto como volumen, así que basta con volver a ejecutar `docker compose up`. Si cambias el `Dockerfile`, usa `--build`.
- **`npx tsx` falla sin Docker**: comprueba con `node -v` que tienes Node 18 o superior.

## Autor

Carlos Manuel Ruiz Garrido — 2º DAW
