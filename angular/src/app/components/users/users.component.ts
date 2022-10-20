import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { GLOBAL } from 'src/app/services/global';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  public title: string
  public url: string
  public identity: any
  public token: any
  public page: any
  public next_page: any
  public prev_page: any
  public total: any
  public pages: any
  public users: User[] | undefined 
  public status: string | undefined

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.title = 'Gente'
    this.url = GLOBAL.url
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getToken()
  }

  ngOnInit(): void {
    console.log('users.component ha sido cargado')
    this.actualPage()
  }

  actualPage(){
    this._route.params.subscribe(params => {
      let page = +params ['page']
      this.page = page

      if (!page) {
        page=1
      }else{
        this.next_page = page+1
        this.prev_page = page-1

        if (this.prev_page <= 0) {
          this.prev_page = 1
        }
      }

      //Devolver listado de ususarios
      this.getUsers(page)
    })
  }
  
  getUsers(page: any){
    this._userService.getUsers(page).subscribe(
      response => {
        if (!response.users) {
          this.status = 'error'
        }else{
          this.total = response.total
          this.users = response.users
          this.pages = response.pages
          if (page > this.pages) {
            this._router.navigate(['/gente',1]);
          }
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
