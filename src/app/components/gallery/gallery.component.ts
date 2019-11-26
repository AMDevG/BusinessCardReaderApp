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

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onDelete() {
    console.log('Do you want to delete this card?');
  }

  onEdit() {
    console.log('Do you want to edit this card?');
  }

}
