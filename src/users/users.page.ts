import { UserService } from './../app/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector:'users',
    templateUrl:'./users.page.html',
    styleUrls:['./users.page.scss']
})
export class UsersPage implements OnInit{
    public users=[];
    constructor(private _UserService: UserService){}
    ngOnInit(){
        this._UserService.getUsers().subscribe(data => this.users = data);
    }
}