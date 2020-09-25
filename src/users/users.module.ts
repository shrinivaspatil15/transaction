import { UsersPage } from './users.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersPageRoutingModule } from './users-routing.module';
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        UsersPageRoutingModule
    ],
    declarations:[UsersPage]
})
export class UsersPageModule{}