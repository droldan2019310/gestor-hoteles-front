import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.css']
})
export class AdminHotelComponent implements OnInit {
  navbarStatus;
  constructor() { 
    this.navbarStatus = 1;
  }

  ngOnInit(): void {
  }
  changeStatus(status){
    this.navbarStatus = status;
  }
}
