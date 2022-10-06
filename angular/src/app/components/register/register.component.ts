import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {User} from '../../models/user'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService : UserService

  ) {
    this.title = 'Registrate'
    this.user = new User('',
    '',
    '',
    '',
    '',
    '',
    'ROLE_USER',
    '')
   }

  ngOnInit(): void {
    console.log('Componente de register cargado')
  }

  onSubmit(){
    this._userService.register(this.user)
  }

}
