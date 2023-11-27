import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private fireStore: Firestore) {
  }

  /**
   * Lista de Proyectos Personales
   * @returns
   */
  cargarProyectos(): Observable<any> {
    return collectionData(collection(this.fireStore, "proyectos"));
  }
}
