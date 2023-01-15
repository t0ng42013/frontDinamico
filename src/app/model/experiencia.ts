export class Experiencia {
    id?: number;
    nombre: string;
    Trabajo: boolean;
    inicio: string;
    fin: string;
    tarea1: string;
    tarea2: string;
    tarea3: string;
    tarea4: string;

    constructor(nombre: string, trabajo: boolean, inicio: string, fin: string, tarea1: string, tarea2: string, tarea3: string, tarea4: string) {
        this.nombre = nombre;
        this.Trabajo = trabajo;
        this.inicio = inicio;
        this.fin = fin;
        this.tarea1 = tarea1;
        this.tarea2 = tarea2;
        this.tarea3 = tarea3;
        this.tarea4 = tarea4;
    }

}
