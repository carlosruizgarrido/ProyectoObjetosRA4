import Producto from "./Producto";

export default class EquipoInformatico extends Producto {
    private memoriaRam!: number;
    private procesador!: string;

    constructor(nombre: string, precio: number, marca: string, garantia: number, memoriaRam: number, procesador: string) {
        super(nombre, precio, marca);
        this.setMemoriaRam(memoriaRam);
        this.setProcesador(procesador);
    }

    public getMemoriaRam(): number {
        return this.memoriaRam;
    }

    public getProcesador(): string {
        return this.procesador;
    }

    public setMemoriaRam(ram: number): void {
        const valores: number[] = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256];
        
        if (valores.includes(ram)) {
            this.memoriaRam = ram;
        } else {
            throw new Error("La memoria RAM seleccionada no es válida.");
        }
    }

    public setProcesador(p: string): void {
        if (p.trim() === "") {
            throw new Error("El procesador no puede estar vacío.");
        }
        this.procesador = p;
    }

    public override aplicarDescuento(a: Producto[], porcentaje: number): void {
        if (!Number.isFinite(porcentaje) || porcentaje <= 0 || porcentaje > 100) {
            throw new Error("El descuento debe estar entre 0 y 100.");
        }

        a.forEach(p => {
            if (p instanceof EquipoInformatico) {
                let descuento = porcentaje;

                if (p.getPrecio() > 100) {
                    descuento += 10;
                }

                descuento = Math.min(descuento, 100);
                p.setPrecio(p.getPrecio() * (1 - descuento / 100));
            }
        });
    }

    public override informacion(): string {
        return `${super.informacion()}, Memoria RAM: ${this.memoriaRam}, Procesador: ${this.procesador}`;
    }
}