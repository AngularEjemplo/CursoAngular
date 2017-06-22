//Importaciones para hacer uso de los elementos
//necesarios para el funcionamiento adecuado del
//componente
import { Component } from '@angular/core';

//Decoradores, encargada de darle funcionalidad a una Clase
//Sirve para indicar propiedades basicas a un componente
@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})

//Clase en TypeScript
export class FrutaComponent{
    //TypeScript se salta la visibilidad cuando compila en JavaScript
    //Propiedades publicas, sirven para ser utilizadas y visualizadas desde otro componente
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
    public nombre:string;
    public edad:number;
    public esAdulto:boolean;
    public trabajos:Array<any>;
    comodin:any;

    constructor(){
      this.nombre = "Luis Jojoa";
      this.edad = 20;
      this.esAdulto = false;
      this.comodin = "si";
      this.trabajos = ['Carpintero', 24, 'hello moto'];
    }

    ngOnInit(){
      this.cambiarNombre();
      this.cambiarEdad(23);
      alert(this.nombre + " " + this.edad);

      //Variables y alcances
      var uno = 8;
      var dos = 15;

      if(uno === 8){
        //let es de menor alcance, solo funcionará cuando se utilice
        //dentro del bloque de este condicional, es decir, es de constructor
        //alcance
        let uno = 3;
        var dos = 88;
        console.log("Dentro del if " + uno);
      }

        console.log("Dentro del if " + uno);

    }

    cambiarNombre(){
      this.nombre = 'Fernando';
    }

    cambiarEdad(edad){
      this.edad = edad;
    }
}
