import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/model/skill';
import { AuthService } from 'src/app/servicios/auth.service';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

    skills: any = [];
    id?: number;
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();

    form = new FormGroup({
        id: new FormControl(),
        nombre: new FormControl(),
        porcentaje: new FormControl()

    });

    skillNuevo: Skill = {
        nombre: '',
        porcentaje: 0,
    };

    constructor(private skillService: SkillService, private auth: AuthService) { }
    ngOnInit(): void {
        this.lista();
    }

    SaveEmployee() {
        if (this.form.value.id) {
            this.skillService.editar(this.form.getRawValue()).subscribe(result => {
                this.saveresponse = result, this;
                this.lista();
            }, err => console.log(err)
            );
        } else {
            this.skillService.crear(this.skillNuevo).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.skillService.getUna(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue({
                id: this.editdata.id,
                nombre: this.editdata.nombre,
                porcentaje: this.editdata.porcentaje
            })
        })
    }

    lista() {
        this.skillService.lista().subscribe(
            res => {
                this.skills = res;
            },
            err => console.log(err)
        );
    }

    agregar() {
        this.form.reset({ id: '', nombre: '' });
        this.skillService.crear(this.skillNuevo).subscribe(res => {
            this.ngOnInit();
        },
            err => console.log(err));
    }

    eliminar(id: number) {
        this.skillService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }

}
