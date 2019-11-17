import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VisionService {
  textArray = [];
  API_URL: string;
  base64Enc: string;

  url = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBZFB9-CMuMag5APKDt_WxZ_BNS1HO-en4';
  constructor(private httpClient: HttpClient) {
    // this.API_URL = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBZFB9-CMuMag5APKDt_WxZ_BNS1HO-en4';
  }

  createRequest(base64) {
    this.base64Enc = base64;
    console.log('set base64 Enc to: ', this.base64Enc);
  }

  request = {
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

    extractText() {
      // console.log(`Beginning text extraction, req: ${this.request['requests'][0]['image']['content']}`);

      this.httpClient.post(this.url, this.request)
      .subscribe( (results: any) => {
        let tmpArr = results.responses[0].textAnnotations;
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
