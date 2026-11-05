import Producto from "./Producto";

export default class Inventario {
    private productos: Map<Producto, number> = new Map();

    private buscar(producto: Producto): Producto | undefined {
        for (const prod of this.productos.keys()) {
            if (prod.getNombre() === producto.getNombre()) {
                return prod;
            }
        }
        return undefined;
    }
    
    public agregar(producto: Producto): boolean {
        const existente = this.buscar(producto);
        if (existente) {
            this.productos.set(existente, this.productos.get(existente)! + 1);
        } else {
            this.productos.set(producto, 1);
        }
        return true;
    }

    public eliminar(producto: Producto): boolean {
        const existente = this.buscar(producto);
        if (!existente) {
            return false; // No estaba en el inventario
        }
        const cantidad = this.productos.get(existente)!;
        if (cantidad > 1) {
            this.productos.set(existente, cantidad - 1);
        } else {
            this.productos.delete(existente);
        }
        return true;
    }

    public mostrarProductos(): void {
        if (this.productos.size === 0) {
            console.log("El inventario está vacío.");
            return;
        }

        console.log("Inventario:");
        for (const [producto, cantidad] of this.productos) {
            console.log(`- ${producto.getNombre()}: ${cantidad} unidad(es)`);
        }
    }

    public calcularValorTotal(): number {
        let total = 0;
        for (const [producto, cantidad] of this.productos) {
            total += producto.getPrecio() * cantidad;
        }
        return total;
    }
}