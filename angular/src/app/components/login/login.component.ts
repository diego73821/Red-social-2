import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Identificate'
    this.user = new User('','','','','','','ROLE_USER','')
   }

  ngOnInit(): void {
    console.log('Componente de login cargado')
  }

  onSubmit(){
    alert(this.user.email)
    alert(this.user.password)
    console.log(this.user)
  }

}
