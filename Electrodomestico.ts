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
        const consumoValidado = ce.toLowerCase();
        if (["a++", "a+", "b", "c"].includes(consumoValidado)) {
            this.consumoEnergetico = consumoValidado;
        } else {
            throw new Error("El consumo energético debe ser A++, A+, B o C");
        }
    }

    public setGarantia(g: number): void {
        if (!Number.isInteger(g) || g < 0) {
            throw new Error("La garantía debe ser un número entero igual o superior a 0.");
        }

        this.garantia = g;
    }

    public override aplicarDescuento(a: Producto[], porcentaje: number): void {
        if (!Number.isFinite(porcentaje) || porcentaje <= 0 || porcentaje > 100) {
            throw new Error("El descuento debe estar entre 0 y 100.");
        }
        
        a.forEach(p => {
            if (p instanceof Electrodomestico) {
                let descuento = porcentaje;

                if (p.getPrecio() > 100) {
                    descuento += 10;
                }

                descuento = Math.min(descuento, 100);

                const nuevoPrecio = p.getPrecio() - (p.getPrecio() * descuento / 100);
                p.setPrecio(nuevoPrecio);
            }
        });
    }

    public override informacion(): string {
        if (this.getGarantia() === 1) {
            return `${super.informacion()}, Consumo energético: ${this.consumoEnergetico}, Garantía: ${this.garantia} año`;
        } else {
            return `${super.informacion()}, Consumo energético: ${this.consumoEnergetico}, Garantía: ${this.garantia} años`;
        }
    }
}