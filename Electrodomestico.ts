import Producto from "./Producto";

export default class Electrodomestico extends Producto {
    private consumoEnergetico!: string;
    private garantia!: number;

    constructor(nombre: string, precio: number, marca: string, consumoEnergetico: string, garantia: number) {
        super(nombre, precio, marca);
        this.setConsumoEnergetico(consumoEnergetico);
        this.setGarantia(garantia);
    }

    public getConsumoEnergetico(): string {
        return this.consumoEnergetico;
    }

    public getGarantia(): number {
        return this.garantia;
    }

    public setConsumoEnergetico(ce: string): void {
        /* Manera fea:
        ce.toLowerCase();
        if (ce == "a" || ce == "b" || ce == "c" || ce == "d" || ce == "e" || ce == "f") {
            this.consumoEnergetico = ce;
        } else {
            this.consumoEnergetico = "NA";
        }
        */

        const letras: string[] = ["a++", "a+", "b", "c"];
        const consumo = ce.toLowerCase();
        this.consumoEnergetico = letras.includes(consumo) ? consumo : "NA";
    }

    public setGarantia(g: number): void {
        if (g >= 0 && Number.isInteger(g)) {
            this.garantia = g;
        } else {
            this.garantia = 0;
        }
    }

    public override aplicarDescuento(a: Producto[], porcentaje: number): void {
        if (porcentaje > 0 && porcentaje <= 100) {
            a.forEach(p => {
                if (p instanceof Electrodomestico) {
                    const descuentoAdicional = p.getPrecio() > 1000 ? 10 : 0;
                    const nuevoPrecio = p.getPrecio() - p.getPrecio() / 100 * (porcentaje + descuentoAdicional);
                    p.setPrecio(nuevoPrecio);
                }
            });
        }
    }
}