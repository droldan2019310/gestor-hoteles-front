import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit {
  navbarStatus;
  constructor() {
    this.navbarStatus=1;
   }

  ngOnInit(): void {
  }
  changeStatus(status){
    this.navbarStatus=status;
  }
}
