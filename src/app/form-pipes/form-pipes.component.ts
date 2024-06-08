import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe,CurrencyPipe,DatePipe],
  templateUrl: './form-pipes.component.html', 
  styleUrl: './form-pipes.component.css'
})
export class FormPipesComponent {
  fechaActual= new Date()
alumnos= [
  {nombre:"Edgarcito"},
  {nombre:"Sebitas"},
  {nombre:"Angelito"},
  {nombre:"Sebitas"},
  {nombre:"Jesucito"},
  {nombre:"Ashlee"},
  {nombre:"Viericito"},
]
curso=[
  {nombre:"Moviles 1", profesor:"Sirfido Alva", precio:2500},
  {nombre:"Ingles", profesor:"Gabriela ", precio:2000},
  {nombre:"Servicio web 1", profesor:"Damazo Lopes", precio:1500},
  {nombre:"Gestion TI", profesor:"Marco Villa", precio:1800}
]
mostrarResultados=0 

mostrarAlumnos():void{
  this.mostrarResultados= 1
}
mostrarCursos():void{
  this.mostrarResultados= 0
}

}
