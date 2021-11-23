import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.scss'],
})
export class InteresesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.startChart();
  }

  private startChart() {
    var options = {
      chart: {
        type: 'bar',
        height: 400,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      series: [
        {
          name: 'Resultado del test',
          data: [50, 39, 29, 67, 25, 94, 21, 43, 64, 25, 50, 56, 92, 100, 100],
        },
      ],
      xaxis: {
        categories: [
          'Linguistica',
          'Musical',
          'Artistica',
          'Humanistica',
          'Comunicacional',
          'Económica',
          'Juridica',
          'Asistencial',
          'sanitária',
          'Naturalista',
          'Geogastronómica',
          'Tecnológica',
          'Diseño',
          'Científica',
          'Cálculo',
        ],
      },
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();
  }
}
