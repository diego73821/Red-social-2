import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title: string
  constructor() {
    this.title = 'Bienvenido a NGsocial'
   }

  ngOnInit(): void {
    console.log('home.component cargado!!')
  }

}
