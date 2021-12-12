
class Contador {
    static cuentaGeneral = 0;

    constructor (responsable) {
        this.responsable = responsable;
        this.cuentaIndividual = 0;
    }


    obtenerResponsable() {
        return this.responsable;
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual;
    }

    obtenerCuentaGeneral() {
        return Contador.cuentaGeneral;
    }

    contar() {
        this.cuentaIndividual++;
        Contador.cuentaGeneral++;
    }
};

const resp1 = new Contador('responsable1');
resp1.contar();
console.log(`cuenta individual responsable 1: ${resp1.obtenerCuentaIndividual()}`);
console.log(`cuenta individual responsable 1: ${resp1.obtenerCuentaGeneral()}`);

const resp2 = new Contador('responsable2');
resp2.contar();
console.log(`cuenta individual responsable 2: ${resp2.obtenerCuentaIndividual()}`);
console.log(`cuenta individual responsable 2: ${resp2.obtenerCuentaGeneral()}`);

const resp3 = new Contador('responsable3');
resp3.contar();
console.log(`cuenta individual responsable 3: ${resp3.obtenerCuentaIndividual()}`);
console.log(`cuenta individual responsable 3: ${resp3.obtenerCuentaGeneral()}`);


