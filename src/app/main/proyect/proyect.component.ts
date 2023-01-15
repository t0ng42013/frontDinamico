import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { AuthService } from 'src/app/servicios/auth.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
    proyectos: Proyecto[]=[];
    id?: number;
    saveresponse: any;
    editdata: any;
    isLoggedIn = this.auth.getToken();

    form = new FormGroup({
        id: new FormControl(),
        nombre: new FormControl(),
        descripcion: new FormControl(),
        imgUrl: new FormControl(),
        variableI: new FormControl()

    });

    proyectoNuevo: Proyecto= {
        nombre: '',
        descripcion: '',
        imgUrl: '',
        variableI: 0
    };

    

    constructor(private proyectoService: ProyectoService, private auth: AuthService){}
   
    ngOnInit(): void {
        this.lista();
    }
   
    SaveEmployee() {
        if (this.form.value.id) {
            this.proyectoService.editar(this.form.getRawValue()).subscribe(result => {
                this.saveresponse = result, this;
                this.lista();
            }, err => console.log(err)
            );
        } else {
            this.proyectoService.crear(this.proyectoNuevo).subscribe(res => {
                this.ngOnInit();
            },
                err => console.log(err));
        }
    }

    loadedit(id: any) {
        this.proyectoService.getUna(id).subscribe(result => {
            this.editdata = result;
            this.form.patchValue({
                id: this.editdata.id,
                nombre: this.editdata.nombre,
                descripcion: this.editdata.descripcion,
                imgUrl: this.editdata.imgUrl,
                variableI: this.editdata.variableI
            })
        })
    }

    lista() {
        this.proyectoService.lista().subscribe(
            res => {
                this.proyectos = res;
            },
            err => console.log(err)
        );
    }

    agregar() {
        this.form.reset({ id: '', nombre: '' });
        this.proyectoService.crear(this.proyectoNuevo).subscribe(res => {
            this.ngOnInit();
        },
            err => console.log(err));
    }

    eliminar(id: number) {
        this.proyectoService.borrar(id).subscribe(res => { this.ngOnInit(); },
            err => console.log(err)
        );
    }
}
