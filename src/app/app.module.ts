import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importar servicio manual y en import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ModalsComponent } from './modals/modals.component';
import { ParallaxComponent } from './header/parallax/parallax.component';
import { NavLoginComponent } from './header/nav-login/nav-login.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RedesComponent } from './header/redes/redes.component';
import { CardMobileComponent } from './header/card-mobile/card-mobile.component';
import { CardDeskComponent } from './header/card-desk/card-desk.component';
import { NavMainComponent } from './main/nav-main/nav-main.component';
import { NavMainMobileComponent } from './main/nav-main-mobile/nav-main-mobile.component';
import { ProyectComponent } from './main/proyect/proyect.component';
import { SvgInicioComponent } from './header/svg-inicio/svg-inicio.component';
import { SvgEndComponent } from './main/svg-end/svg-end.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { SobreMiComponent } from './header/card-desk/sobre-mi/sobre-mi.component';
import { ExpComponent } from './header/card-desk/exp/exp.component';
import { EducacionnComponent } from './header/card-desk/educacionn/educacionn.component';
import { CursosComponent } from './header/card-desk/cursos/cursos.component';
import { HabilidadesComponent } from './header/card-desk/habilidades/habilidades.component';
import { AboutMobComponent } from './header/card-mobile/about-mob/about-mob.component';
import { ExpMobComponent } from './header/card-mobile/exp-mob/exp-mob.component';
import { EduMobComponent } from './header/card-mobile/edu-mob/edu-mob.component';
import { SkillMobComponent } from './header/card-mobile/skill-mob/skill-mob.component';
import { ProyMobComponent } from './header/card-mobile/proy-mob/proy-mob.component';
import { CursosMobComponent } from './header/card-mobile/cursos-mob/cursos-mob.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        ModalsComponent,
        ParallaxComponent,
        NavLoginComponent,
        LoginModalComponent,
        RedesComponent,
        CardMobileComponent,
        CardDeskComponent,
        NavMainComponent,
        NavMainMobileComponent,
        ProyectComponent,
        SvgInicioComponent,
        SvgEndComponent,
             
        SobreMiComponent,
        ExpComponent,
        EducacionnComponent,
        CursosComponent,
        HabilidadesComponent,
        AboutMobComponent,
        ExpMobComponent,
        EduMobComponent,
        SkillMobComponent,
        ProyMobComponent,
        CursosMobComponent




    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        //servicio
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule


    ],
    //y en provider
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
