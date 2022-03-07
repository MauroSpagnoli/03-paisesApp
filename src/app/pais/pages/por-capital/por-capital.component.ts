import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string='';

  constructor() { }

  buscar(){
    console.log(this.termino);
  }

}
