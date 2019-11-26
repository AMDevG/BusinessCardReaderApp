import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UploadService } from 'src/app/fire-store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BusinessCard } from 'src/app/model/business-card.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit, OnDestroy {

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
                companyName: ['', Validators.required],
                email:  [''],
                phone: ['']
            });
    }

  onSubmit(id: any, value: any) {
    this.fireStoreService.updateCard(id, value);
    this.route.navigate([`dash`]);
  }
  onCancel() {
    this.editBusinessCardForm.reset();
    this.route.navigate([`dash`]);
  }
  onDelete(id: any) {
    this.fireStoreService.deleteCard(id);
    this.route.navigate([`dash`]);
  }

  ngOnInit() {
    this.paramSub = this.activeRoute.params.subscribe(params => {
      const localID = 'id';
      this.cardId = params[localID];
      this.cardSub = this.fireStoreService.getCard( this.cardId ).subscribe( result => {
          this.card = result;
          this.hasImage = true;
          this.editBusinessCardForm.patchValue({
            firstName: this.card.firstName,
            lastName: this.card.lastName,
            companyName: this.card.companyName,
            email: this.card.email,
            phone: this.card.phone
        });
      });
    });
  }

  ngOnDestroy() {
    this.cardSub.unsubscribe();
    this.paramSub.unsubscribe();
  }
}
