import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardDeskComponent } from './header/card-desk/card-desk.component';
import { ExpComponent } from './header/card-desk/exp/exp.component';
import { AuthGuard } from './helper/auth.guard';
import { ModalsComponent } from './modals/modals.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'experiencia' , component:ExpComponent,canActivate:[AuthGuard]
    },
    {
        path: 'login',
        component: ModalsComponent

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
