import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  sidebarStatus;
  constructor() {
    this.sidebarStatus=1;
   }

  ngOnInit(): void {
  }
  status(status){
    this.sidebarStatus= status;
  }
}
