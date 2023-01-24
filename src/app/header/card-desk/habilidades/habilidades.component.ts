import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/servicios/auth.service';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
    selector: 'app-habilidades',
    templateUrl: './habilidades.component.html',
    styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
    public form!: FormGroup;
    skills: any = [];
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();

    constructor(private skillService: SkillService,
        private formBuilder: FormBuilder,
        private auth: AuthService) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [''],
            nombre: ['', Validators.required],
            porcentaje: [''],
        });
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
            this.skillService.crear(this.form.getRawValue()).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.skillService.getUna(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue(result)
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

    eliminar(id: number) {
        this.skillService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }

    nuevo() {
        this.form.reset();
    }

}
