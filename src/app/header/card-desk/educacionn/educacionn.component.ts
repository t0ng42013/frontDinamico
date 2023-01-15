import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacionn',
  templateUrl: './educacionn.component.html',
  styleUrls: ['./educacionn.component.css']
})
export class EducacionnComponent  implements OnInit{
    listaEducacion: any = [];   
    id?: number;
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();

    form = new FormGroup({
        id: new FormControl(),
        instituto: new FormControl(),
        inicio: new FormControl(),
        fin: new FormControl(),
        titulo: new FormControl(),

    });


    EduNueva: Educacion = {
        instituto: '',
        inicio: '',
        fin: '',
        titulo: ''

    };

    constructor(private educacionService: EducacionService,
        private auth: AuthService,
        private cursoService:CursoService) { }
    ngOnInit(): void {
        this.lista();
    }
    SaveEmployee() {
        if (this.form.value.id) {
            this.educacionService.editar(this.form.getRawValue()).subscribe(result => {
                this.saveresponse = result, this;
                this.lista();
            }, err => console.log(err)
            );
        } else {
            this.educacionService.crear(this.EduNueva).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.educacionService.getUna(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue({
                id: this.editdata.id,
                instituto: this.editdata.instituto,               
                inicio: this.editdata.inicio,
                fin: this.editdata.fin,
                titulo: this.editdata.titulo
            })
        })
    }

    lista() {
        this.educacionService.lista().subscribe(
            res => {
                this.listaEducacion = res;
            },
            err => console.log(err)
        );
    }

    agregar() {
        this.form.reset({ id: '', instituto: '' });
        this.educacionService.crear(this.EduNueva).subscribe(res => {
            this.ngOnInit();
        },
            err => console.log(err));
    }

    eliminar(id: number) {
        this.educacionService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }



}
