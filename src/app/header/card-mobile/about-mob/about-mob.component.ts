import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-about-mob',
  templateUrl: './about-mob.component.html',
  styleUrls: ['./about-mob.component.css']
})
export class AboutMobComponent {
    persona: any = [];
    id?: number;
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();

    form = new FormGroup({
        id: new FormControl(),
        nombre: new FormControl(),
        apellido: new FormControl(),
        domicilio: new FormControl(),
        titulo: new FormControl(),
        sobreMi: new FormControl(),
        url: new FormControl()
    });

    personaNueva: Persona = {
        nombre: '',
        apellido: '',
        domicilio: '',
        titulo: '',
        sobreMi: '',
        url: ''
    };
    constructor(private personaService: PersonaService, private auth: AuthService) { }
    ngOnInit(): void {
        this.listaPersonas();
    }


    SaveEmployee() {
        console.log(this.form.value);
        this.personaService.editarPersona(this.form.getRawValue()).subscribe(result => {
            this.saveresponse = result, this;
            this.listaPersonas();
        }, err => console.log(err)
        );
    }
    loadedit(id: any) {
        this.personaService.getUnaPersona(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue({
                id: this.editdata.id,
                nombre: this.editdata.nombre,
                apellido: this.editdata.apellido,
                sobreMi: this.editdata.sobreMi,
                domicilio: this.editdata.domicilio,
                titulo: this.editdata.titulo,
                url: this.editdata.url,

            })
        })
    }

    listaPersonas() {
        this.personaService.getPersonas().subscribe(
            res => {
                this.persona = res;
                console.log(res);
            },
            err => console.log(err)
        );
    }

    agregarPersona() {
        this.personaService.crearPersoan(this.personaNueva).subscribe(res => {
            this.ngOnInit(), console.log(res);
        },
            err => console.log(err));
    }

    eliminar(id: number) {
        this.personaService.borrarPersona(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }

}
