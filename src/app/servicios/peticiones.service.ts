//modulo para permitir la inyección de dependencias
import { Injectable } from '@angular/core';
//modulos de HTTP para la comunicación mediante peticiones AJAX
import { Http, Response, Headers } from '@angular/http';
//Librería para mapear las peticiones HTTP
import 'rxjs/add/operator/map';
//Necesaria para hacer uso de rxks
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PeticionesService{

  public url:string;

//Se pasa el atributo para tener acceso a todas las funcionalidades de HTTP
  constructor(private _http:Http){
    this.url="https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba(){
    return "Hola mundo desde el servicio";
  }

//Petición HTTP o AJAX a través del método GET haciendo uso de la URL en la cual se encuentran almacenados los datos
//el método map captura la respuesta y devuelve objetos usables en formato JSON
  getArticulos(){
    return this._http.get(this.url)
                     .map(res => res.json());
  }

}
