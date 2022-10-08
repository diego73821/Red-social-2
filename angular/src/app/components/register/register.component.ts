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
  public status: string
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService : UserService

  ) {
    this.status = status
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

  onSubmit(form : any){
    this._userService.register(this.user).subscribe(
      response => {
        if(response.user && response.user._id){
          //console.log(response.user)
          this.status = 'success'
          form.reset()
        }else{
          this.status = 'error'
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}
