import { Component,OnInit } from '@angular/core';
import {  FormBuilder,Validators, FormGroup} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
    public form! :FormGroup;
    
    listaCursos: any = [];
    editdata: any; 
    saveresponse: any;
    isLoggedIn = this.auth.getToken();

    constructor(private cursoService: CursoService,
        private formBuilder: FormBuilder,        
        private auth: AuthService) { }
   
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [''],
            instituto: ['',Validators.required],
            inicio: [''],
            fin: [''],
            titulo:['']
        });
        this.lista();
 }
    
    SaveEmployee(): any {
        console.log('object');
        if (this.form.value.id) {
            this.cursoService.editar(this.form.getRawValue()).subscribe(result => {
                this.saveresponse = result;
                this.ngOnInit();
            }, err => console.log(err)
            );
        } else {            
            this.cursoService.crear(this.form.getRawValue()).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.cursoService.getUna(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue(result)
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

    eliminar(id: number) {
        this.cursoService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }

    nuevo() {
        this.form.reset();
    }
    
}
