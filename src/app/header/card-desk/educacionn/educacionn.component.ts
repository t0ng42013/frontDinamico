import { Component,OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { CursosComponent } from '../cursos/cursos.component';

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

    public form!: FormGroup;
  
    constructor(private formBuilder:FormBuilder,
        private educacionService: EducacionService,
        private auth: AuthService) { }
  
        
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [''],
            instituto: ['', Validators.required],
            inicio: [''],
            fin: [''],
            titulo: ['']
        });
        this.lista()
    }

    SaveEmployee() {
        if (this.form.value.id) {
            this.educacionService.editar(this.form.getRawValue()).subscribe(result => {
                this.saveresponse = result, this;
                this.lista();
            }, err => console.log(err)
            );
        } else {
            this.educacionService.crear(this.form.getRawValue()).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.educacionService.getUna(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue(result)
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
   
    eliminar(id: number) {
        this.educacionService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }

    nuevo() {
        this.form.reset();
    }

}
