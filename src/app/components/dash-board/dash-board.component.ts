import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Title } from '@angular/platform-browser';
import { UploadService } from 'src/app/fire-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
    title = 'Dashboard';

    constructor(public authService: AuthService, private titleService: Title, private router: Router,
                public fireStoreService: UploadService) {}

    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

    scanNew() {
      this.router.navigate(['new']);
    }
}
