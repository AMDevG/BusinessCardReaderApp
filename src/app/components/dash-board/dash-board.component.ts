import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
    visibleCam: boolean = false;
    userName: string;
    title = 'DashBoard';

    constructor(private authService: AuthService, private titleService: Title) {}

    ngOnInit() {
        this.userName = this.authService.getCurrentUser();
        this.titleService.setTitle(this.title);
    }

    toggleCameraWindow() {
        this.visibleCam = !this.visibleCam;
    }
}
