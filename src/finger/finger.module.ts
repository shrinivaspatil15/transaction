import { FingerPageRoutingModule } from './finger-routing.module';
import { FingerPage } from './finger.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        FingerPageRoutingModule
    ],
    exports:[],
    providers:[FingerprintAIO],
    declarations:[FingerPage]
})
export class FingerPageModule{}