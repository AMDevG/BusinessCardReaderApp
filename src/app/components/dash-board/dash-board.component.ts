import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
    public visibleCam = false;
    userName;
    title = 'Dashboard';
    public cardsAvailable = false;

    constructor(public authService: AuthService, private titleService: Title) {}

    ngOnInit() {
        this.userName = this.authService.getCurrentUserID();
        this.titleService.setTitle(this.title);
    }

    toggleCameraWindow() {
        this.visibleCam = !this.visibleCam;
    }

    displayAllCards() {

      /*  FUNCTION NEEDS TO BE ONLOAD
          HIT FIREBASE SERVICE (UPLOAD") IF USERNAME (UID) !EXIST DISPLAY TEXT 'NO SAVED CARDS' W/ BTN 'GET STARTED' TO FIRE SHOWCAMERA
          (ONCLICK) */

    }
}
