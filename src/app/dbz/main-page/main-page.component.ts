import { Component, OnInit } from '@angular/core';
interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo:Personaje = {
    nombre : 'Truncks',
    poder : 140000

  };

  agregar() {
    console.log(this.nuevo);
  }
  cambiarNombre(event: any){
    console.log(event.target.value);

  }
}
