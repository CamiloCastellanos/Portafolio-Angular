import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  listaProyecto: Project[] = []

  constructor(private fireStore: AngularFirestore) {
  }

  cargarProyectos(): Observable<any> {
    return this.fireStore.collection("proyectos").snapshotChanges();
  }
}
