import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Title } from '@angular/platform-browser';
import { VisionService } from 'src/app/vision.service';
import { UploadService } from 'src/app/fire-store.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
    public visibleCam = false;
    // public showForm = this.fireStoreService.doneProcessing;

    userName;
    title = 'Dashboard';

    constructor(public authService: AuthService, private titleService: Title, private visionService: VisionService,
                public fireStoreService: UploadService) {}

    ngOnInit() {
        this.userName = this.authService.getCurrentUserID();
        this.titleService.setTitle(this.title);
    }

    toggleCameraWindow() {
        this.visibleCam = !this.visibleCam;
    }

    displayForm() {
      if (this.fireStoreService.doneProcessing) {
        return true;
      } else {
        return false;
      }

    }
}
