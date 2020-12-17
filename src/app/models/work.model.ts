export class Work {
  titulo: string;
  descripcion: string;
  imagen: string;
  url: string;
  fechaInicio:string;
  fechaFin:string;

  constructor() {
    this.titulo = "";
    this.descripcion = "";
    this.imagen = "";
    this.url="#";
    this.fechaFin="Actual";
    this.fechaInicio="";
  }

}
