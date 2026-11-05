import Producto from "./Producto";

export default class Inventario {

    private productos: Producto[] = [];

    public agregar(producto: Producto): void {
        this.productos.push(producto);
        console.log(`${producto.getNombre()} agregado al inventario.`);
    }

    public eliminar(producto: Producto): boolean {
        const indice = this.productos.findIndex(
            p => p.getNombre() === producto.getNombre()
        );

        if (indice === -1) {
            console.log("El producto no existe en el inventario.");
            return false;
        }

        this.productos.splice(indice, 1);
        console.log(`${producto.getNombre()} eliminado del inventario.`);
        return true;
    }

    public buscar(producto: Producto): Producto | undefined {
        return this.productos.find(
            p => p.getNombre() === producto.getNombre()
        );
    }

    public mostrarProductos(): void {
        if (this.productos.length === 0) {
            console.log("El inventario está vacío.");
            return;
        }

        console.log("Inventario:");

        this.productos.forEach((producto, indice) => {
            console.log(`${indice + 1}. ${producto.informacion()}`);
        });
    }

    public calcularValorTotal(): number {
        return this.productos.reduce(
            (total, producto) => total + producto.getPrecio(),
            0
        );
    }
}