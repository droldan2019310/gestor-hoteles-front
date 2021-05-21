import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
  sidebarStatus;
  constructor() { 
    
    this.sidebarStatus = 1;
  }

  ngOnInit(): void {
  }

  status(status){
    this.sidebarStatus = status;
  }
}
