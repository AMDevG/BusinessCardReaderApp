import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VisionService {
  textArray = [];
  API_URL: string;
  request: any;

  constructor(private httpClient: HttpClient) {
    this.API_URL = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBZFB9-CMuMag5APKDt_WxZ_BNS1HO-en4';
  }
  createRequest(base64In: string): any {
    this.request = {
      requests: [
      {
      image: {
        content: `${base64In}`
      },
      features: [
        {type: 'TEXT_DETECTION',
        maxResults: 1, }]
        }]
      };
    this.extractText();
    }

    extractText() {
      console.log('Beginning text extraction');
      this.httpClient.post(this.API_URL, this.request)
      .subscribe( (results: any) => {
        const tmpArr = results.responses[0].textAnnotations;
        tmpArr.forEach(element => {
          this.textArray.push(element['description']);
        });
        // console.log('Going to pass array of type to process: ', typeof this.textArray);
        this.processIntoForm();
      }
    );
  }

  processIntoForm() {
    console.log('textArray: ');
    this.textArray.forEach(item => {console.log(item); });
    // console.log('Assign annotations to form field values; Call BusinessServ to pass form to BCardComponent');
    console.log('Finished mock code! textArray holds all annotations and Image is uploaded;');
  }

  getDescriptionArray() {
    return this.textArray;
  }

  // uploadImageToStorage() {
  //     console.log("Mock call to upload Image!");
  // }

  // convertToBase64() {
  //   // const image = document.createElement('img');
  //   // image.src = this.imageUrl;
  //   const imgNode = document.getElementById(`image`);
  //   // if (imgNode ) {
  //   console.log('SELECTED IMAGE');

  //   domtoimage.toPng(imgNode)
  //     .then( (dataUrl: string) => {
  //       // console.log(dataUrl);
  //       this.base64 = dataUrl;
  //       console.log('base64: ', this.base64);
  //     }).catch( (e: any) => {
  //       console.log('SELECTED IMAGE BASE64 SOMETHING WENT WRONG');
  //       console.log(e);
  //     });
  //   // }
  // }
}
