import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
    visibleCam: boolean = false;
    userName: string;

    toggleCameraWindow() {
        this.visibleCam = !this.visibleCam;
    }
  
    constructor(private authService: AuthService) {}

  ngOnInit() {
      this.userName = this.authService.getCurrentUser();
  }

}
