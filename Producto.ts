export default class Producto {
    private nombre: string;
    private precio!: number; // El ! se utiliza para decirle que va a ser utilizado, evita un error
    private marca: string;
    
    constructor(nombre: string, precio: number, marca: string) {
        this.nombre = nombre;
        this.setPrecio(precio);
        this.marca = marca;
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

    public setNombre(n: string): void {
        this.nombre = n;
    }

    public setPrecio(p: number): void {
        if (p >= 0) {
            this.precio = p;
        } else {
            this.precio = 0;
        }
    }

    public setMarca(m: string): void {
        this.marca = m;
    }

    public static precioPromedio(a: Producto[]): number {
        if (a.length === 0) return 0;
        const total = a.reduce((acc, p) => acc + p.getPrecio(), 0);
        return total / a.length;
    }

    public static contarPorMarca(a: Producto[], marca: string): number {
        return a.filter(p => p.getMarca() === marca).length;
    }

    public aplicarDescuento(a: Producto[], porcentaje: number): void {
        if (porcentaje > 0 && porcentaje <= 100) {
            a.forEach(p => {
                const nuevoPrecio = p.getPrecio() - p.getPrecio() / 100 * porcentaje;
                p.setPrecio(nuevoPrecio);
            });
        }
    }
}