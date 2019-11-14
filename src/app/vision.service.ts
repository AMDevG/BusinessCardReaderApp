import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisionService {
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
          this.textArray.push(element['description']);
          // console.log('Descr: ', element['description']);
        });
        console.log('Going to pass array of type to process: ', typeof this.textArray);
        this.processIntoForm();
      }
    );
  }

  getDescriptionArray() {
    return this.textArray;
  }
  //CALL IN VISION ARRAY TO SYNCH OR SUBSCRIBE MAKE OBSERVABLE??
  processIntoForm() {
    console.log('textArray: ');
    this.textArray.forEach(item => {console.log(item)});
    console.log('Assign annotations to form field values; Call BusinessServ to pass form to BCardComponent');
  }

  uploadImageToStorage() {
      console.log("Mock call to upload Image!");
      console.log("Uploaded and Processing!");
    //   WILL NEED TO CHANGE IMAGE URI IN REQUEST -> THEN CALL EXTRACT TEXT 
  }
}
