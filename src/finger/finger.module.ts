import { FingerPageRoutingModule } from './finger-routing.module';
import { FingerPage } from './finger.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        FingerPageRoutingModule
    ],
    exports:[FingerPage]
})
export class FingerPageModule{}