import { RouterModule, Routes } from '@angular/router';
import { FingerPage } from './finger.page';
import { NgModule } from '@angular/core';
const routes: Routes = [
    {
        path:'',
        component: FingerPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FingerPageRoutingModule{}