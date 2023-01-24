import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
    public form!: FormGroup;

    persona: any = [];
    id?: number;
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();
   
    constructor(private personaService: PersonaService, private formBuilder: FormBuilder, private auth:AuthService){}
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [''],
            nombre: ['',Validators.required],
            apellido: [''],
            domicilio: [],
            titulo: [''],
            sobreMi: [''],
            url:['']
        });
        this.listaPersonas();
    }
   
    
    SaveEmployee() {
        console.log(this.form.value);
        this.personaService.editarPersona(this.form.getRawValue()).subscribe(result => {
            this.saveresponse = result;
            this.listaPersonas();
        }, err => console.log(err)
        );
    }

    loadedit(id: any) {
        this.personaService.getUnaPersona(id).subscribe(result => {
            this.editdata = result;            
            this.form.patchValue(result);
           
        })
    }

    listaPersonas() {
        this.personaService.getPersonas().subscribe(
            res => {
                this.persona = res;
                
            },
            err => console.log(err)
        );
    }

    eliminar(id: number) {
        this.personaService.borrarPersona(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }
    nuevo() {
        this.form.reset();
    }

}
