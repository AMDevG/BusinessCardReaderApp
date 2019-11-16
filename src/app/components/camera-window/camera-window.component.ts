import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { AuthService } from '../../auth.service';
import { UploadService } from '../../upload.service';
import { VisionService } from 'src/app/vision.service';

@Component({
  selector: 'app-camera-window',
  templateUrl: './camera-window.component.html',
  styleUrls: ['./camera-window.component.css']
})

export class CameraWindowComponent implements OnInit {
    @Input() displayCamera: boolean;

    public showWebcam = true;
    public multipleWebcamsAvailable = false;
    public errors: WebcamInitError[] = [];
    public webcamImage: WebcamImage = null;
    private trigger: Subject<void> = new Subject<void>();
    base64ImgUpload: string;
    uploadedImgURL: string;

    constructor(private authService: AuthService, public visionService: VisionService, private uploadService: UploadService) {}

    public ngOnInit(): void {
      WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
          this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

    public triggerSnapshot(): void {
        this.trigger.next();
    }

    public toggleWebcam(): void {
        this.showWebcam = !this.showWebcam;
    }

    public handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    public handleImage(webcamImage: WebcamImage): void {
        this.webcamImage = webcamImage;
        this.base64ImgUpload = this.webcamImage.imageAsBase64;
        this.uploadedImgURL = this.webcamImage.imageAsDataUrl;
        // console.log('Data URL: ', this.uploadedImgURL);

        // console.log('Current user took photo: ', this.authService.getCurrentUserID());
        // this.uploadService.base64Img = this.base64ImgUpload;
        // this.uploadService.filePathUri = this.uploadedImgURL;
    }

    uploadImage() {
      this.uploadService.uploadImage(this.base64ImgUpload);
    }

    public hideCapture() {
        this.webcamImage = null;
    }
}
