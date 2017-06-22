import { Component } from '@angular/core';
import { RopaService } from '../servicios/ropa.service';
@Component({

  selector: 'home',
  templateUrl: './home.component.html',

  providers: [RopaService]

})

export class HomeComponent{
  public titulo = "Página principal";
  public listado_ropa:Array<string>;
  public prenda_guardar:string;

  public fecha;
  public nombre = "JUAN lopez MarTinez";

  constructor(
    private _ropaService: RopaService
  ){
    this.fecha = new Date(2017,6-1,22);
  }

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_guardar);
    this.prenda_guardar = null;
  }

  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }
}
