import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisionService {

  constructor(private httpClient: HttpClient) {}

  textArray = [];
  API_URL: string;
  base64Enc: string;

  url = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBZFB9-CMuMag5APKDt_WxZ_BNS1HO-en4';

  payload = {
      requests: [
    {
      image: {
        content: '',
      },
      features: [
        {
          type: 'TEXT_DETECTION'
        }
      ]
    }]
  };

  createRequest(base64) {
    this.base64Enc = base64;
    this.payload.requests[0].image.content = this.base64Enc;
    this.extractText();
  }

    extractText() {
      console.log('Calling vision API');
      this.httpClient.post(this.url, JSON.stringify(this.payload))
      .subscribe((results: any) => {
        const tmpArr = results.responses[0].textAnnotations;
        tmpArr.forEach(element => {
          this.textArray.push(element.description);
        });
      });
      this.getDescriptionArray();
    }

  getDescriptionArray() {
    // console.log('Text Annotations: ', this.textArray);
  }
}
