import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { Curso } from 'src/app/model/curso';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { Persona } from 'src/app/model/persona';
import { Proyecto } from 'src/app/model/proyecto';
import { Skill } from 'src/app/model/skill';
import { BannerService } from 'src/app/servicios/banner.service';
import { CursoService } from 'src/app/servicios/curso.service';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PersonaService } from 'src/app/servicios/persona.service';

import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
    selector: 'app-card-mobile',
    templateUrl: './card-mobile.component.html',
    styleUrls: ['./card-mobile.component.css']
})
export class CardMobileComponent implements OnInit {
    experiencia: Experiencia[] = [];
    educacion: Educacion[] = [];
    persona: Persona[] = [];
    banner: Banner[] = [];
    curso: Curso[] = [];
    skill: Skill[] = [];
    proyecto: Proyecto[] = [];


    constructor( private EducacionService: EducacionService, private ExperienciaService: ExperienciaService, private personaService: PersonaService, private banenrService: BannerService, private cursoService: CursoService, private skillService: SkillService, private proyectoService: ProyectoService) { 
       
    }
   
    ngOnInit(): void {
        this.cargarExp();
        this.cargarEdu();
        this.cargarPer();
        this.cargarBan();
        this.cargarCurs();
        this.cargarSkill();
        this.cargarProy();
     
    }

    cargarExp(): void {
        this.ExperienciaService.lista().subscribe(data => { this.experiencia = data }, err => console.log(err));
    }
    cargarEdu(): void {
        this.EducacionService.lista().subscribe(data => { this.educacion = data }, err => console.log(err));
    }
    cargarPer(): void {
        this.personaService.getPersonas().subscribe(data => { this.persona = data }, err => console.log(err));
    }
    cargarBan(): void {
        this.banenrService.lista().subscribe(data => { this.banner = data }, err => console.log(err));
    }
    cargarCurs(): void {
        this.cursoService.lista().subscribe(data => { this.curso = data }, err => console.log(err));
    }
    cargarSkill(): void {
        this.skillService.lista().subscribe(data => { this.skill = data }, err => console.log(err));
    }
    cargarProy(): void {
        this.proyectoService.lista().subscribe(data => { this.proyecto = data }, err => console.log(err));
    }

  

}
