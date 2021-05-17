import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../Animations/Animations';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  animations: [fadeIn],
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
