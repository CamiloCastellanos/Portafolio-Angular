import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  listaTrabajo: Work[] = [];

  constructor() {
    let servicioTrabajo = new WorksService();
    this.listaTrabajo = servicioTrabajo.listaTrabajo;
  }

  ngOnInit(): void {
  }

}
