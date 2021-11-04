import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Work } from '../../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private fireStore: AngularFirestore) {
  }
  /**
   * Lista de Trabajos
   * @returns
   */
  cargarTrabajos(): Observable<any> {
    return this.fireStore.collection("trabajos", ref => ref.orderBy('orden', 'desc')).snapshotChanges();
  }

}
