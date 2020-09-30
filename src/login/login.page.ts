import { Component } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, FormControl } from '@angular/forms'
@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage{
    loginForm : FormGroup;
    email: string="";
    password: string="";
    
    public msg:string=""; 

    constructor(private frmBuilder:FormBuilder){
        this.loginForm = frmBuilder.group({
            email: new FormControl(),
            password: new FormControl()
        });
    }

    PostData(loginform:any){
        this.email = loginform.controls.email.value
        this.password = loginform.controls.password.value;
        this.msg='';
        if(loginform.controls.password.touched && loginform.controls.password.touched){
            this.msg="Plese fill the field!"
            console.log('Touched but value not changed')
        }
        if(loginform.controls.password.untouched){
            this.msg="Plese fill the field!"
            console.log('Untouched')
        }
        console.log(loginform.controls);
    }
}

