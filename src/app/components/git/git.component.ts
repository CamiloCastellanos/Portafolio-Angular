import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  listaProyecto: Project[] = []

  constructor() {
    let servicioProyecto = new ProjectsService();
    this.listaProyecto = servicioProyecto.listaProyecto;
  }

  ngOnInit(): void {
  }

}
