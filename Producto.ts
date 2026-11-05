export default class Producto {
    private nombre!: string;
    private precio!: number; 
    private marca!: string;
    // El ! se utiliza para decirle que va a ser utilizado, evita un error
    
    constructor(nombre: string, precio: number, marca: string) {
        this.setNombre(nombre);
        this.setPrecio(precio);
        this.setMarca(marca);
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getMarca(): string {
        return this.marca;
    }

    public informacion(): string {
        return `Nombre: ${this.nombre} | Precio: ${this.precio}€ | Marca: ${this.marca}`;
    }

    public setNombre(n: string): void {
        if (n.trim() === "") {
            throw new Error("El nombre no puede estar vacío.");
        }
        this.nombre = n.trim();
    }

    public setPrecio(p: number): void {
        if (Number.isFinite(p) && p < 0) {
            throw new Error("El precio debe ser un número válido y no puede ser negativo.");
        }
        this.precio = p;
    }

    public setMarca(m: string): void {
        if (m.trim() === "") {
            throw new Error("La marca no puede esta vacía.");
        }
        this.marca = m.trim();
    }

    public static precioPromedio(a: Producto[]): number {
        if (a.length === 0) return 0;
        const total = a.reduce((acc, p) => acc + p.getPrecio(), 0);
        return total / a.length;
    }

    public static contarPorMarca(a: Producto[], marca: string): number {
        return a.filter(
            p => p.getMarca().toLowerCase() === marca.toLowerCase()
        ).length;
    }

    public aplicarDescuento(a: Producto[], porcentaje: number): void {
        if (!Number.isFinite(porcentaje) || porcentaje <= 0 || porcentaje > 100) {
            throw new Error("El descuento debe estar entre 0 y 100.");
        }
        a.forEach(p => {
            const nuevoPrecio = p.getPrecio() - p.getPrecio() / 100 * porcentaje; // Revisar 
            p.setPrecio(nuevoPrecio);
        });
    }
}