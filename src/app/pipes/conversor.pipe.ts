//Los Pipes son pequeñas funciones que sirven para realizar tareas especificas en la vista de angular
//Conversion de caracteres, mayúsculas, minúsculas, operaciones

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})

export class ConversorPipe implements PipeTransform{
  transform(valor1:number, valor2:number){
    let valoruno=valor1;
    let valordos=valor2;

    let resultado = "La multiplicación: " + valoruno + " x " + valordos + " = " +(valoruno*valordos);

    return resultado;
  }
}
