import { Token } from '@angular/compiler';
import { Component, ɵɵresolveBody } from '@angular/core';
import { FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Credentials } from 'src/app/model/Credentials';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
    creds: Credentials = {
        email: '',
        password: ''
    };
    
    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private auth:AuthService, private rutas:Router) {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(4)]]            
        })
    }

    get Email() {
        return this.form.get('email');
    }

    get Password() {
        return this.form.get('password');
    }

    login(form: FormGroup) {
        this.auth.login(this.creds).subscribe(Response => {
            this.rutas.navigate(['/']); 
            window.location.reload();
        })
    }
   
}
