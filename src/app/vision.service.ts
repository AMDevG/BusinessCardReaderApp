import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisionService {
  // textArray: string[];
  textArray = [];
  constructor(private httpClient: HttpClient) { }

  request: any = {
    requests: [
    {
    image: {
      source: {
      imageUri:
       'https://firebasestorage.googleapis.com/v0/b/buseinesscardreader.appspot.com/o/testCard1.jpg?alt=media&token=cdf9a199-9a83-4e4b-9f36-52e3b0c3e0d4',
      },
    },
    features: [
      {type: 'TEXT_DETECTION',
      maxResults: 1, }]
      }]
    };

    url = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBZFB9-CMuMag5APKDt_WxZ_BNS1HO-en4';

    extractText() {
      console.log('Beginning text extraction');
      this.httpClient.post(this.url, this.request)
      .subscribe( (results: any) => {
        const tmpArr = results.responses[0].textAnnotations;
        tmpArr.forEach(element => {
          // console.log('Pushing elm: ', element);
          this.textArray.push(element['description']);
          // console.log('Descr: ', element['description']);
        });
      }
    );
  }

  getDescriptionArray() {
    return this.textArray;
  }

  // processText() {
  //   console.log('testarr: ', this.textArray);
  // }
}
