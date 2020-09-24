import { Component } from '@angular/core';
import transaction from './transactions.json';
@Component({
    selector:'transaction',
    templateUrl:'./transaction.page.html',
    styleUrls:['./transaction.page.scss']
})
export class TransactionPage{
    public trans:{
        from:string,
        to:string,
        amount:number,
        bank:string,
        status:boolean
    }[] = transaction;

}