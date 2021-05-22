import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import {fadeIn} from '../Animations/Animations';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  animations: [fadeIn]
})
export class EventosComponent implements OnInit {
  public features:[];
  public uri;
  constructor() { }

  ngOnInit(): void {
    this.getFeatures()
  }

  getFeatures(){
    this.features = JSON.parse(localStorage.getItem("featureRoom"));
    this.uri = CONNECTION.URI;
  }
}
