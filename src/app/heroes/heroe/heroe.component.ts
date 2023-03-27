import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  nombre = 'Ironman';
  edad = 45;
  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }
  obtenerNombre() {
    return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void{
    this.edad = 85;
  }
  constructor() {}

  ngOnInit(): void {}
}
