import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
    selector: 'app-exp',
    templateUrl: './exp.component.html',
    styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
    experiencias: any = [];
    id?: number;
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();

    public formexp!: FormGroup;

    constructor(private formBuilder: FormBuilder, private experienciaService: ExperienciaService, private auth: AuthService) { }

    ngOnInit(): void {
        this.formexp = this.formBuilder.group({
            id: [''],
            nombre: ['', [Validators.required]],
            trabajo: [''],
            inicio: [''],
            fin: [''],
            tarea1: [''],
            tarea2: [''],
            tarea3: [''],
            tarea4: ['']
        });

        this.lista();
    }

    Save(): any {
        if (this.formexp.value.id) {
            this.experienciaService.editar(this.formexp.getRawValue()).subscribe(result => {
                this.saveresponse = result;
                this.ngOnInit();
            }, err => console.log(err)
            );
        } else {
            this.experienciaService.crear(this.formexp.getRawValue()).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.experienciaService.getUnaExp(id).subscribe(result => {
            this.editdata = result;
            this.formexp.patchValue(result)
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

    eliminar(id: number) {
        this.experienciaService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }

    nuevo() {
        this.formexp.reset();
    }

}
