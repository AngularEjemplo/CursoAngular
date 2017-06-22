import { Component } from '@angular/core';
import { Empleado} from './empleado'
@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente empleados'
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Luis Jojoa', 20, "Programador", true);
        this.trabajadores = [
          new Empleado('Stuartina', 23, "Cocinera", false),
          new Empleado('Michael', 40, "Diseñador", true),
          new Empleado('Gustavo', 20, "Evaluador", false)

        ];
        this.trabajador_externo=true;
        this.color = 'blue';
        this.color_seleccionado='#ccc';
    }
    ngOnInit(){
      console.log(this.empleado);
      console.log(this.trabajadores);
    }

    cambiarExterno(valor){
      this.trabajador_externo= valor;
    }

    logColorSeleccionado(){
      console.log(this.color_seleccionado);
    }
}
