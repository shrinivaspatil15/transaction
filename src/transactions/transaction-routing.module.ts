import { TransactionPage } from './transaction.page';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes =[
    {
        path:'',
        component:TransactionPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransactionPageRoutingModule{}