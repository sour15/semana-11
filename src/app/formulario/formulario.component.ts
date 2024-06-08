import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  resultado = "Esperando que ingrese los resultados"
  urlImage ="https://pics.filmaffinity.com/Stranger_Things_Serie_de_TV-875025085-large.jpg"
mostrarMensaje=true
formImc={
  talla: null,
  peso: null
}

pacienteList: Paciente=[]


calcularImc():void{
let tallam = Number ( this.formImc.talla) / 100
let valorImc =Number(this.formImc.peso)/(tallam*tallam)
this.resultado = valorImc.toString()
var diagnostico =""
if(valorImc <=18.5){
  diagnostico = "peso inferior"
}

else if(valorImc <=24.9){
diagnostico ="Peso normal"
}else if(valorImc<=29.9){
  diagnostico ="Sobre peso"
}else if(valorImc<=34.9){
  diagnostico ="Obesidad"
}else {
  diagnostico ="Obesidad extrema"
}

this.resultado= "Su imc es: "+ valorImc.toFixed(2)+","  +diagnostico 
this.pacienteList.push({
id: this.pacienteList.length +1,
valor: valorImc.toFixed(2).toString(), 
diagnostico: diagnostico              
});

this.mostrarMensaje= true;
}

}
type Paciente =Array<{id:number, valor: string, diagnostico:string}>
