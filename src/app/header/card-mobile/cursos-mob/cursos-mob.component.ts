import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Curso } from 'src/app/model/curso';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-cursos-mob',
  templateUrl: './cursos-mob.component.html',
  styleUrls: ['./cursos-mob.component.css']
})
export class CursosMobComponent {
    listaCursos: any = [];
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

    cursoNuevo: Curso = {
        instituto: '',
        inicio: '',
        fin: '',
        titulo: ''
    };

    constructor(private cursoService: CursoService, private auth: AuthService) { }

    ngOnInit(): void {
        this.lista();
    }

    SaveEmployee() {
        if (this.form.value.id) {
            this.cursoService.editar(this.form.getRawValue()).subscribe(result => {
                this.saveresponse = result;
                this.lista();
            }, err => console.log(err)
            );
        } else {
            this.cursoService.crear(this.cursoNuevo).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.cursoService.getUna(id).subscribe(result => {
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
        this.cursoService.lista().subscribe(
            res => {
                this.listaCursos = res;
            },
            err => console.log(err)
        );
    }

    agregar() {
        this.form.reset({ id: '', instituto: '' });
        this.cursoService.crear(this.cursoNuevo).subscribe(res => {
            this.ngOnInit();
        },
            err => console.log(err));
    }

    eliminar(id: number) {
        this.cursoService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }


}

