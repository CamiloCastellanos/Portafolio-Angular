import { Component, Input } from '@angular/core';
import { ToolsLanguagesService } from '../services/tools-languages.service';
import { ToolsLanguages } from '../../../../models/ToolsLanguages.model';
import { InfiniteCarouselType } from '../../../../models/InfiniteCarouselType';

@Component({
  selector: 'app-tools-languages',
  templateUrl: './tools-languages.component.html',
  styleUrl: './tools-languages.component.scss'
})
export class ToolsLanguagesComponent {
  @Input() tipoListaDefault: number = -1;
  @Input() tipoLista: number = -1;
  listaHerramientas: ToolsLanguages[] = []
  carouselList: InfiniteCarouselType[] = []
  tipographyTitle: string = "font-weight-600 typography-lora"
  tipographySubtitle: string = "font-weight-500 typography-open-sans"
  tipographyText: string = "font-weight-600 typography-open-sans"

  constructor(public serviceTool: ToolsLanguagesService) { }
  /// Estado = 0 (Solo Trabajo)
  /// Estado = 1 (Solo Proyectos Personales)
  /// Estado = 2 (Aplica para las 2)
  ngOnInit(): void {
    this.listaHerramientas = this.serviceTool.listaHerramientas.filter(
      h =>
        h.estado == this.tipoListaDefault
        ||
        h.estado == this.tipoLista
    );

    this.carouselList = this.listaHerramientas.map((item: ToolsLanguages) => {
      return {
        image: item.imagen,
        text: item.nombre
      }
    });
  }
}
