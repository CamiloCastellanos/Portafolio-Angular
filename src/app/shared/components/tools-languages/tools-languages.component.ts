import { Component, Input, OnInit, Output } from '@angular/core';
import { ToolsLanguages } from '../../../models/ToolsLanguages.model';
import { ToolsLanguagesService } from '../../../core/services/tools-languages.service';

@Component({
  selector: 'app-tools-languages',
  templateUrl: './tools-languages.component.html',
  styleUrls: ['./tools-languages.component.css']
})
export class ToolsLanguagesComponent implements OnInit {

  listaHerramientas: ToolsLanguages[] = []

  @Input() tipoListaDefault: number;
  @Input() tipoLista: number;

  constructor(public serviceTool: ToolsLanguagesService) { }
  /// Estado = 0 (Solo Trabajo)
  /// Estado = 1 (Solo Proyectos Personales)
  /// Estado = 2 (Aplica para las 2)
  ngOnInit(): void {
    this.listaHerramientas = this.serviceTool.listaHerramientas.filter(h =>
                                                                            h.estado == this.tipoListaDefault
                                                                            ||
                                                                            h.estado == this.tipoLista
                                                                      );
  }

}
