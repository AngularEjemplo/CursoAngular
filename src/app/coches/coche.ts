export class Coche{

 //Forma tradicional para crear una clase
  /*public nombre:string;
  public edad:number;

  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }*/

//Forma de TypeScript para crear una clase, crea e inicializa
//las propiedades y ahorra la definición, traspado y asignacion de un valor
//a cada propiedad
  constructor(
    public nombre:string,
    public potencia:string,
    public color:string,

  ){}
}
