import { NgModule } from '@angular/core';
import { ForgetPage } from './forget.page';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
    {
        path: '',
        component: ForgetPage
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForgetPageRoutingModule {}