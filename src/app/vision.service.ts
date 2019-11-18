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

request = {
    image: {
      content: this.base64Enc
    },
    features: [ {
      type: 'TEXT_DETECTION',
      maxResults: 1,
    }]
  };

  createRequest(base64) {
    this.base64Enc = base64;
    //this.request['requests'][0]['image']['content'] = this.base64Enc;
    // console.log('set Conten Enc to: ', this.base64Enc);
    console.log('Calling text extract');
    this.extractText();
  }


    extractText() {
      // console.log(`Beginning text extraction, base64: ${this.request['requests'][0]['image']['content']}`);
      console.log('Calling vision API');
      this.httpClient.post(this.url, this.request)
      .subscribe( (results: any) => {
        const tmpArr = results.responses[0].textAnnotations;
        console.log('received tmpArr: ', tmpArr);
        tmpArr.forEach(element => {
          this.textArray.push(element['description']);
        });
        // console.log('Going to pass array of type to process: ', typeof this.textArray);
        // this.processIntoForm();
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


  // createRequest(baseIn) {
  //   this.request = {
  //     requests: [
  //     {
  //     image: {
  //       content: `${baseIn}`
  //     },
  //     features: [
  //       {type: 'TEXT_DETECTION',
  //       maxResults: 1, }]
  //       }]
  //     };
  //   // this.extractText();
  //   // console.log(`Base included: ${baseIn}`);
  //   }

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
