import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent implements OnInit {
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
          data: [5, 10, 8, 5, 8, 3, 8, 6, 6, 5],
        },
      ],
      xaxis: {
        categories: [
          'Inteligencia linguistico-verbal',
          'Inteligencia lógico-matematica',
          'Inteligencia espacial',
          'Inteligencia corporal-cinestica',
          'Inteligencia Musical',
          'Inteligencia Naturalista',
          'Inteligencia Intrapersonal',
          'Inteligencia Interpersonal',
          'Inteligencia Especulativa',
          'Inteligencia Creativa',
          'Inteligencia Práctica',
        ],
      },
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();
  }
}
