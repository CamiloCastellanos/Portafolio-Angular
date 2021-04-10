import { Component, OnInit } from '@angular/core';
import { ToolsLanguages } from 'src/app/models/ToolsLanguages.model';
import { ToolsLanguagesService } from 'src/app/services/tools-languages.service';

@Component({
  selector: 'app-tools-languages',
  templateUrl: './tools-languages.component.html',
  styleUrls: ['./tools-languages.component.css']
})
export class ToolsLanguagesComponent implements OnInit {

  listaHerramientas: ToolsLanguages[] = []

  constructor() {
    let serviceTool: ToolsLanguagesService = new ToolsLanguagesService();
    this.listaHerramientas = serviceTool.listaHerramientas;
  }

  ngOnInit(): void {
  }

}
