import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import {BusinessCard} from '../../model/business-card.model';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.css']
})
export class BusinessCardsComponent implements OnInit {
  bCards: Observable<any>;

  constructor(private af: AngularFirestore) {}

  ngOnInit() {
    let cardsCollectionRef = this.af.collection<BusinessCard>('images', ref => ref.where('userId', '==',
                              JSON.parse(sessionStorage.getItem('bcs-user'))));
    this.bCards = cardsCollectionRef.snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data() as BusinessCard;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      } )
    );

  }

}
