import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../servicios/peticiones.service';
@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})

export class CochesComponent{
  public coche:Coche;
  public coches:Array<Coche>;
  public articulos;

  constructor(
    private _peticionesService: PeticionesService
  ){
    this.coche = new Coche(" "," "," ");
    this.coches = [
      new Coche("Seat Panda","120","Blanco"),
      new Coche("Renault","110","Azul"),
      new Coche("Chervrolet","200","Gris")
    ];
  }

  ngOnInit(){
    //el método para traer los datos, es necesario hace uso del suscribed para capturar el resultado de la petición mediante una función CALLBACK
    this._peticionesService.getArticulos().subscribe(
      //Resultado de los datos obtenidos con la petición a una API
      result => {

          this.articulos = result;

          if (!this.articulos) {
            console.log("Error en el servidor");
          }

        },
      //Error, en caso de que la conexión no se logre o algun módulo falte para el funcionamiento del método
      error => {

        var mensaje_Error = <any>error;
        console.log(mensaje_Error);

        }
    );

  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche(" "," "," ");
  }
}
