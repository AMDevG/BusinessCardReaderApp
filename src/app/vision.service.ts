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

  executeRequest(base64) {
    this.base64Enc = base64;
    this.payload.requests[0].image.content = this.base64Enc;
    return this.httpClient.post(this.url, JSON.stringify(this.payload));
    }
}
