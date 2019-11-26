import { Injectable } from '@angular/core';
import { BusinessCard } from '../app/model/business-card.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private businessCardDoc: AngularFirestoreDocument<BusinessCard>;
  bCards: AngularFirestoreCollection<BusinessCard>;

  constructor(private af: AngularFirestore) {
    this.bCards = af.collection<BusinessCard>('businessCards');
  }

  addCard(bCard: BusinessCard) {
    return this.bCards.add(bCard);
  }

  // UPDATES CARD WHERE PARAM ID
  updateCard(id, update) {
    this.businessCardDoc = this.af.doc<BusinessCard>(`businessCards/${id}`);
    this.businessCardDoc.update(update);
  }

  deleteCard(id) {
    this.businessCardDoc = this.af.doc<BusinessCard>(`businessCards/${id}`);
    this.businessCardDoc.delete();
  }

  // Detect changes to a BusinessCard document //
  getCard(id: string): Observable<BusinessCard> {
    this.businessCardDoc = this.af.doc<BusinessCard>(`businessCards/${id}`);
    return this.businessCardDoc.snapshotChanges()
      .pipe(
        map( changes => {
          const data = changes.payload.data();
          const id = changes.payload.id;
          return { id, ...data };
        })
      );
  }
}
