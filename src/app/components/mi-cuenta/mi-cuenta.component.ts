import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  navStatus;
  constructor() { }

  ngOnInit(): void {
    this.navStatus = 1;
  }

  changeNav(status){
    this.navStatus = status;
  }

}
