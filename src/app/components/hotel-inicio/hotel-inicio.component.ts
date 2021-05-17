import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-inicio',
  templateUrl: './hotel-inicio.component.html',
  styleUrls: ['./hotel-inicio.component.css']
})
export class HotelInicioComponent implements OnInit {
  navbarStatus;
  constructor() { }

  ngOnInit(): void {
    this.navbarStatus =1;
  }

  changeStatus(status){
    this.navbarStatus = status;
  }
}
