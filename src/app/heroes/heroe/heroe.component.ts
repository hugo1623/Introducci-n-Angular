import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  nombre = 'Ironman';
  edad = 45;
  obtenerNombre(){
    return `${this.nombre} - ${this.edad}`;
  }
  get nombreCapitalizado (){
    return this.nombre.toUpperCase();
  }
  constructor() {}

  ngOnInit(): void {}
}
