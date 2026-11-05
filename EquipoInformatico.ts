import Producto from "./Producto";

export default class EquipoInformatico extends Producto {
    private memoriaRam!: number;
    private procesador: string;

    constructor(nombre: string, precio: number, marca: string, consumoEnergetico: string, garantia: number, memoriaRam: number, procesador: string) {
        super(nombre, precio, marca);
        this.setMemoriaRam(memoriaRam);
        this.procesador = procesador;
    }

    public getMemoriaRam(): number {
        return this.memoriaRam;
    }

    public getProcesador(): string {
        return this.procesador;
    }

    public setMemoriaRam(mr: number): void {
        const valores: number[] = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256];
        this.memoriaRam = valores.includes(mr) ? mr : 0;
    }

    public setProcesador(p: string): void {
        this.procesador = p;
    }

    public override aplicarDescuento(a: Producto[], porcentaje: number): void {
        if (porcentaje > 0 && porcentaje <= 100) {
            a.forEach(p => {
                if (p instanceof EquipoInformatico) {
                    const descuentoAdicional = p.getMarca().toLowerCase() === "apple" ? 5 : 0;
                    const nuevoPrecio = p.getPrecio() - p.getPrecio() / 100 * (porcentaje + descuentoAdicional);
                    p.setPrecio(nuevoPrecio);
                }
            });
        }
    }
}