import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor() { }
  title = 'Contador App';
  numero = 10;
  base = 5;

  acumulador(valor: number){
    this.numero += valor;
  }

}
