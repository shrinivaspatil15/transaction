import { TransactionPageRoutingModule } from './transaction-routing.module';
import { TransactionPage } from './transaction.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[
        CommonModule,
        IonicModule,
        FormsModule,
        TransactionPageRoutingModule
    ],
    declarations:[TransactionPage]
})
export class TransactionPageModule{}