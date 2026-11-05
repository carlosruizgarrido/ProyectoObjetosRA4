# Proyecto Objetos RA4: Inventario de productos con TypeScript

Proyecto de la unidad 3 (Objetos) del módulo **Desarrollo Web en Entorno Cliente** de 2º DAW.

## Qué hace

- Crea productos de distintos tipos: Genéricos, electrodomésticos y equipos informáticos.
- Los agrega a un inventario y muestra su contenido con las unidades de cada uno.
- Calcula el valor total del inventario.
- Aplica descuentos porcentuales a grupos de productos y muestra el precio resultante. Cada clase redefine el descuento: los electrodomésticos de más de 1000 reciben un 10% extra y los equipos informáticos de Apple un 5% extra.

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
Precio de Frigorífico después del descuento: $840.00
Precio de Microondas después del descuento: $240.00
Precio de Portátil después del descuento: $1350.00
Precio de PC de sobremesa después del descuento: $1800.00
Precio de Tablet después del descuento: $510.00
```

## Estructura del proyecto

```
.
├── Main.ts               # Punto de entrada: crea productos, inventario y aplica descuentos
├── Producto.ts           # Clase base: nombre, precio y marca
├── Electrodomestico.ts   # Producto con clasificación energética y garantía
├── EquipoInformatico.ts  # Producto con memoria RAM y procesador
├── Inventario.ts         # Gestión del inventario: agregar, eliminar, mostrar y calcular el valor total
├── Dockerfile            # Imagen con Node, TypeScript y tsx
├── docker-compose.yml    # Ejecución con un solo comando
├── .dockerignore         # Archivos excluidos de la imagen
└── README.md
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

Node, TypeScript y tsx se instalan dentro del contenedor, así que no hace falta instalar nada en tu máquina. El contenedor se detiene solo al terminar, porque el programa acaba su ejecución.

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

## Solución de problemas

- **`docker: command not found` o error de conexión con el daemon**: Docker Desktop no está instalado o no está abierto.
- **Los cambios en el código no se reflejan**: el `docker-compose.yml` monta la carpeta del proyecto como volumen, así que basta con volver a ejecutar `docker compose up`. Si cambias el `Dockerfile`, usa `--build`.
- **`npx tsx` falla sin Docker**: comprueba con `node -v` que tienes Node 18 o superior.

## Autor

Carlos Manuel Ruiz Garrido — 2º DAW.
