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
  public title: string
  public user: User
  public status: string | undefined
  public identity: any // + min 9
  public token: any // + min 9

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
//loguear al usuario y conseguir sus datos
    this._userService.signup(this.user).subscribe(
      response => {

        this.identity = response.user // + min 9

        console.log(this.identity)
                
        // + min 9
        if (!this.identity || !this.identity._id) { 
          this.status = 'error'
        }else{
          this.status= 'success'

          //persistir datos del usuario
          localStorage.setItem('identity', JSON.stringify(this.identity))

          //conseguir el token
          this.getToken() // + min 9
        }
      },
      error => {
        var errorMessage = <any>error
        console.log(errorMessage)
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
  }

  // + min 9
  getToken() {
    this._userService.signup(this.user, true).subscribe(
      response => {
        this.token = response.token

        console.log(this.token)

        if (this.token.length <= 0) {
          this.status = 'error'
        }else{
          this.status= 'success'

          //persistir token del usuario
          localStorage.setItem('token', this.token)

          //conseguir los contadores o estadisticas del usuarios

        }
      },
      error => {
        var errorMessage = <any>error
        console.log(errorMessage)
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
  }

}
