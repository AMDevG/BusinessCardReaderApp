import { Component, OnInit, Input } from '@angular/core';
import { BusinessCard } from 'src/app/model/business-card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() bCard: BusinessCard;
  hasCards: boolean;

  constructor(private router: Router) {
    if (this.bCard !== null ) {
      console.log('BCard not null!');
      this.hasCards = true;
    }
    else {
      this.hasCards = false;
    }
    console.log('Current val of hasCards: ', this.hasCards);
  }

  ngOnInit() {

  }

  onEdit() {
    this.router.navigate([`edit/${this.bCard.id}`]);
  }

}
