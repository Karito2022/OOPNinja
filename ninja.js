class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza =3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(`Ninja name: ${ this.nombre }`);
    }
    showStarts() {
        console.log(`name: ${ this.nombre }, hp: ${this.salud}, speed: ${this.velocidad}, strength: ${this.fuerza}`);
    }
    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStarts();
ninja1.drinkSake();
