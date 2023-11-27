import { Injectable } from '@angular/core';
import { ToolsLanguages } from '../../../../models/ToolsLanguages.model';
import toolsLanguagesJSON from '../../../../../assets/JSON/Tools-Languages.json';

@Injectable({
  providedIn: 'root'
})
export class ToolsLanguagesService {

  listaHerramientas: ToolsLanguages[] = [];

  constructor() {
    this.cargarHerramientas();
  }
  /**
   * Lista de Herramientas de desarrollo
   */
  cargarHerramientas() {
    for (const item in toolsLanguagesJSON.herramientas) {
      let herramienta = new ToolsLanguages();
      herramienta.nombre = toolsLanguagesJSON.herramientas[item].nombre;
      herramienta.imagen = toolsLanguagesJSON.herramientas[item].imagen;
      herramienta.estado = toolsLanguagesJSON.herramientas[item].estado;
      this.listaHerramientas.push(herramienta);
    }
  }
}
