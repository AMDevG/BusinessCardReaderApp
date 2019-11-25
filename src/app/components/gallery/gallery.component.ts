import { Component, OnInit, Input } from '@angular/core';
import { BusinessCard } from 'src/app/model/business-card.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() bCard: BusinessCard;
  constructor() { }

  ngOnInit() {
  }

}
