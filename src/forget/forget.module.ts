import { ForgetPageRoutingModule } from './forget-routing.module';
import { ForgetPage } from './forget.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ForgetPageRoutingModule
    ],
    declarations: [ForgetPage]
})
export class ForgetPageModule {}