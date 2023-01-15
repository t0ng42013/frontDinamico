export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    domicilio: String;
    titulo: String;
    sobreMi: String;
    url: String;

    constructor(nombre: string, apellido: string, domicilio: string, titulo: string,
        sobreMi: string, url: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.titulo = titulo;
        this.sobreMi = sobreMi;
        this.url = url;
    }
    

}
