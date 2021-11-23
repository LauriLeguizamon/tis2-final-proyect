import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.scss'],
})
export class ValoresComponent implements OnInit {
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
      series: [
        {
          name: 'Nivel de Importancia',
          data: [1, 3, 2, 3, 2, 1, 3, 2, 3, 1, 2, 2, 3, 1, 3, 2],
        },
      ],
      xaxis: {
        categories: [
          'Altruismo, Soliradiad, Desarrollo de los otros',
          'Originalidad, Creatividad, Innovacion',
          'Seguridad, Pertenencia, Tranquilidad',
          'Autonomía, Independencia, Tiempo Libre',
          'Logro, Variedad, Flexibilidad',
          'Liderazgo, Fama, Autoridad',
          'Progreso, Precisión, Reflexión',
          'Belleza, Orden, Armonía',
          'Recompensa, Ganancia, Estatus, Dinero',
          'Autenticidad, Integridad, Coherencia',
          'Comunicación, Tolerancia, Respeto',
          'justicia, Igualdad, Oportunidades, Paz',
          'Aventura, Desafíos, Riesgos',
          'Libertad, Espiritualidad, Compromiso',
          'Exelencia, Laboriosidad, Responsabilidad',
          'Fidelidad, Leadtad, Amistad',
        ],
      },
    };

    var chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();
  }
}
