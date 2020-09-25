import { UsersPage } from './users.page';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes : Routes = [
    {
        path:'',
        component:UsersPage
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersPageRoutingModule{}