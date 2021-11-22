import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalidad',
  templateUrl: './personalidad.component.html',
  styleUrls: ['./personalidad.component.scss'],
})
export class PersonalidadComponent implements OnInit {
  public breathing: boolean = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.breathing = true;
    }, 1000);
  }
}
