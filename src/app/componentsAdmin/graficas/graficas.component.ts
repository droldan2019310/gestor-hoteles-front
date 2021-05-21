import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ["Mejores Hoteles"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
            {data: [65], label: 'Hotel A'},
             {data: [59], label: 'Hotel B'},
             {data: [80], label: 'Hotel C'}
  ];

  public count;

  constructor() { 
    this.getCount()
  }

  ngOnInit(): void {
    this.getCount()
  }

  getCount(){
    this.count = JSON.parse(localStorage.getItem("count"));
  }
}
