import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../Animations/Animations';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
  animations: [fadeIn]
})
export class HabitacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
