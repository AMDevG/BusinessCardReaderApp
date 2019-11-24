import { Component, OnInit, Optional, Input, OnChanges, OnDestroy, SimpleChanges, SimpleChange } from '@angular/core';
import { VisionService } from '../../vision.service';
import { UploadService } from '../../fire-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { BusinessCard } from 'src/app/model/business-card.model';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit, OnDestroy {
  // @Input() finishedImageProcess: boolean;
  // @Input() updateCardForm: () => void;
  @Input() bCard: BusinessCard;
  populated: boolean;
  base64Img: string;
  filePathUri: string;
  userId: string;

  public uploadForm: FormGroup;
  annotations: any[];

  constructor( @Optional() private fb: FormBuilder, @Optional() private visionService: VisionService,
               @Optional() public uploadService: UploadService) {
                  this.uploadForm = this.fb.group({
                  firstName: '',
                  lastName:  '',
                  company: '',
                  email:  '',
                  phone: ''
                });
  }

//   ngOnChanges(changes: SimpleChanges) {
//     const currentItem: SimpleChange = changes.item;
//     console.log('got item: ', currentItem.currentValue);
//     this.populateForm();
// }
// populateForm() {
//     // console.log('Populating form with annots in components');
//     if (this.finishedImageProcess === true) {
//     this.annotations = this.uploadService.getAnnotations();
//     this.uploadForm.patchValue({firstName: this.annotations[1], lastName: this.annotations[2],
//                               company: this.annotations[3],
//                               email: this.annotations[4], phone: this.annotations[5]}
//                               );
//     // this.uploadService.doneProcessing = false;
//     } else {
//       // this.populateForm();
//       console.log('Image Processing not finished yet');
//     }
//     // this.populated = this.uploadService.doneProcessing;
//     console.log('Populated Form! in Component!');
//   }

onSubmit(value: any) {
    console.log('form submit!');
  }

  ngOnInit() {
  }

ngOnDestroy() {

  }
}
