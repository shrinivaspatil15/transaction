import { NotFoundPage } from './notfound.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
    {
        path: '',
        component: NotFoundPage
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule {}