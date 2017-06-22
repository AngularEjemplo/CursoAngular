import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})

export class ContactoComponent{
  public titulo_contacto = "Página de contacto";

  //propiedad para almacenar el valor del parametro en la URL
  public parametro;

  constructor(
    //Definición de propiedades para el funcionamiento de parametros a través de la URL
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(){

    //método ForEach del _router para recorrer todos los parametros
    //haciendo uso de función CallBack pasando los parametros
    //está función no me permite salir de la clase, o sea que no se afecta el atributo
    /*this._route.params.forEach(function(params: Params){
        this.parametro = params['page'];
    });*/

    //Se hace uso del mismo método pero con una función de flecha
    this._route.params.forEach((params: Params) => {
        this.parametro = params['page'];
    });
  }

  redirigir(){
    this._router.navigate(['/contacto','Luis Jojoa']);
  }

  redirigirDos(){
    this._router.navigate(['/inicio']);
  }
}
