import { Component, OnInit } from '@angular/core';
import {fadeIn} from '../Animations/Animations';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  animations: [fadeIn]
})
export class EventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
