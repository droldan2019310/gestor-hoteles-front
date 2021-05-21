import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habitaciones-admin',
  templateUrl: './habitaciones-admin.component.html',
  styleUrls: ['./habitaciones-admin.component.css']
})
export class HabitacionesAdminComponent implements OnInit {
  sidebarStatus;
  constructor() {
    this.sidebarStatus =1;
   }

  ngOnInit(): void {
  }
  status(status){
    this.sidebarStatus = status;
    document.getElementById("navbarNav2").classList.remove("show");
  }
}
