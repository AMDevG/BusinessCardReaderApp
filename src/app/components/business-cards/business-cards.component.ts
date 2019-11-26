import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import {BusinessCard} from '../../model/business-card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-cards',
  templateUrl: './business-cards.component.html',
  styleUrls: ['./business-cards.component.css']
})
export class BusinessCardsComponent implements OnInit {
  checkForEmpty: Observable <any>;
  bCards: Observable<any>;
  cardsAvailable: boolean;
  collectionLength: number;

  constructor(private af: AngularFirestore, private router: Router) {}

  ngOnInit() {

    let cardsCollectionRef = this.af.collection<any>(`businessCards`, ref => ref.where('userId', '==',
                              JSON.parse(sessionStorage.getItem('cur-user'))));

    this.collectionLength = cardsCollectionRef.doc.length;
    if (this.collectionLength > 0) {
      this.cardsAvailable = true;
    } else {
        this.cardsAvailable = false;
      }

    this.bCards = cardsCollectionRef.snapshotChanges().pipe(
      map( actions => {
        return actions.map( a => {
          const data = a.payload.doc.data() as BusinessCard;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }),
    );

    this.checkForEmpty = cardsCollectionRef.valueChanges().pipe(
      map( a => {
        console.log('received var in emptycheck: ', a);
      })
    );
    }

  onScan() {
    this.router.navigate(['/new']);

  }
}
