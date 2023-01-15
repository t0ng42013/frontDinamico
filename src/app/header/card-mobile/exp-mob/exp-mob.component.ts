import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { AuthService } from 'src/app/servicios/auth.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-exp-mob',
  templateUrl: './exp-mob.component.html',
  styleUrls: ['./exp-mob.component.css']
})
export class ExpMobComponent {
    experiencias: any = [];
    id?: number;
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();

    form = new FormGroup({
        id: new FormControl(),
        nombre: new FormControl(),
        trabajo: new FormControl(),
        inicio: new FormControl(),
        fin: new FormControl(),
        tarea1: new FormControl(),
        tarea2: new FormControl(),
        tarea3: new FormControl(),
        tarea4: new FormControl()
    });

    expNueva: Experiencia = {
        nombre: '',
        Trabajo: false,
        inicio: '',
        fin: '',
        tarea1: '',
        tarea2: '',
        tarea3: '',
        tarea4: ''
    };

    constructor(private experienciaService: ExperienciaService, private auth: AuthService) { }

    ngOnInit(): void {
        this.lista();
    }


    SaveEmployee() {
        if (this.form.value.id) {
            this.experienciaService.editar(this.form.getRawValue()).subscribe(result => {
                this.saveresponse = result, this;
                this.lista();
            }, err => console.log(err)
            );
        } else {
            this.experienciaService.crear(this.expNueva).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.experienciaService.getUnaExp(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue({
                id: this.editdata.id,
                nombre: this.editdata.nombre,
                trabajo: this.editdata.trabajo,
                inicio: this.editdata.inicio,
                fin: this.editdata.fin,
                tarea1: this.editdata.tarea1,
                tarea2: this.editdata.tarea2,
                tarea3: this.editdata.tarea3,
                tarea4: this.editdata.tarea4,

            })
        })
    }

    lista() {
        this.experienciaService.lista().subscribe(
            res => {
                this.experiencias = res;
            },
            err => console.log(err)
        );
    }

    agregar() {
        this.form.reset({ id: '', nombre: '' });
        this.experienciaService.crear(this.expNueva).subscribe(res => {
            this.ngOnInit();
        },
            err => console.log(err));
    }

    eliminar(id: number) {
        this.experienciaService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }

}
