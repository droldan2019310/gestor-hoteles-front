import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import {fadeIn} from '../Animations/Animations';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
  animations: [fadeIn]
})
export class HabitacionesComponent implements OnInit {
  public rooms:[];
  uri;
  constructor() { 
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.getRooms();
  }
  
  getRooms(){
    this.rooms = JSON.parse(localStorage.getItem("hotelRoom"));
  }

}
