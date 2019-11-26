import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VisionService } from 'src/app/vision.service';
import { UploadService } from 'src/app/fire-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessCard } from 'src/app/model/business-card.model';
import {BrowserModule} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  editBusinessCardForm: FormGroup;
  card: BusinessCard;
  editedCard: BusinessCard;
  cardId: string;
  hasImage = false;

  fileName: string;
  filePreview: string;

  private paramSub: any;
  private cardSub: any;

  constructor(private fb: FormBuilder, public fireStoreService: UploadService,
              private route: Router, private activeRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
          this.editBusinessCardForm = this.fb.group({
                firstName: ['', Validators.required],
                lastName:  ['', Validators.required],
                companyName: [''],
                email:  [''],
                phone: ['']
            });
    }

  ngOnInit() {
    this.paramSub = this.activeRoute.params.subscribe(params => {
      const localID = 'id';
      this.cardId = params[localID];
      // console.log('Param sub received id', this.cardId);
      this.cardSub = this.fireStoreService.getCard( this.cardId ).subscribe( result => {
        this.card = result;
        this.hasImage = true;
        this.editBusinessCardForm.patchValue({
          firstName: this.card.firstName,
          lastName: this.card.lastName,
          orgName: this.card.companyName,
          email: this.card.email,
          phone: this.card.phone
        });

      } );

    });

  }

  onSubmit(value: any) {
    console.log('Card Edit submitted:');
  }

  onCancel() {
    this.editBusinessCardForm.reset();
    this.route.navigate([`dash`]);
  }
  onDelete(id: any) {
    this.fireStoreService.deleteCard(id);
    console.log('Deleted Card ', id);
    this.route.navigate([`dash`]);
  }
}
