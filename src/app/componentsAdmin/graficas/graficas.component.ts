import { Component, DoCheck, OnInit, ViewChild  } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Hotel } from 'src/app/models/Hotel';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit, DoCheck {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public count;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  public countReservation;
  public bestHotel;
  public barChartLabels: Label[] = ["Mejores Hoteles"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public dato1= JSON.parse(localStorage.getItem("hotel1Reservs"));
  public dato2 = JSON.parse(localStorage.getItem("hotel2Reservs"));
  public dato3 = JSON.parse(localStorage.getItem("hotel3Reservs"));

  public barChartData: ChartDataSets[] = [
    
    {data: [this.dato1], label: localStorage.getItem("hotel1")},
    {data: [this.dato2], label: localStorage.getItem("hotel2")},
    {data: [this.dato3], label: localStorage.getItem("hotel3")},
  ];

  
  constructor() { 
    this.getCount();
    this.getCountReservation();
    this.getBestHotel();
    console.log(this.barChartData)
  }

  ngOnInit(): void {
    this.getCount();
    this.getCountReservation();
    this.getBestHotel();
  }
 
  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
  }
  
  ngDoCheck(){
    this.getCount();
    this.getCountReservation();
    this.getBestHotel();
    
   
  }

  

  getCount(){
    this.count = JSON.parse(localStorage.getItem("count"));
  }
  getCountReservation(){
    this.countReservation = localStorage.getItem("countReservation")
  }

  getBestHotel(){
    this.bestHotel = localStorage.getItem("bestHotel");
    
  }
}
