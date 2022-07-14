import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { areaChartOptions } from './helpers/areaChartOptions';
import { barChartOptions } from './helpers/barChartOptions';
import { donutChartOptions } from './helpers/donutChartOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Highcharts';
  donutChart = new Chart(donutChartOptions);
  areaChart = new Chart(areaChartOptions);
  barChart = new Chart(barChartOptions)
}
