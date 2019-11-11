import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { AuthService } from '../auth.service';
import { URL } from 'url';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-camera-window',
  templateUrl: './camera-window.component.html',
  styleUrls: ['./camera-window.component.css']
})
export class CameraWindowComponent implements OnInit {

  constructor(private authService: AuthService, private uploadService: UploadService) {}

  public showWebcam = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;

  public errors: WebcamInitError[] = [];
  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();

  base64ImgUpload: string;
  uploadedImgURL: string;

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

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.base64ImgUpload = this.webcamImage.imageAsBase64;
    this.uploadedImgURL = this.webcamImage.imageAsDataUrl;

    // this.uploadService.base64Img = this.base64ImgUpload;
    // this.uploadService.filePathUri = this.uploadedImgURL;

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
