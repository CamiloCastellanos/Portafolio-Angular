import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class WorkService {
  constructor(private firestore: Firestore) {}

  /**
   * Lista de Trabajos
   * @returns
   */
  cargarTrabajos(): Observable<any> {
    return collectionData(collection(this.firestore, "trabajos"));
  }
}
