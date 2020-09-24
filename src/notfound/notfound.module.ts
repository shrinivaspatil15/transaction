import { NotFoundRoutingModule } from './notfound-routing.module';
import { NotFoundPage } from './notfound.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NotFoundRoutingModule
    ],
    declarations: [NotFoundPage]
})
export class NotFoundModule {}