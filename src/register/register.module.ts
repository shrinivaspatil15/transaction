import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterPageRoutingModule
    ],
    declarations: [RegisterPage]
})
export class RegisterPageModule {}