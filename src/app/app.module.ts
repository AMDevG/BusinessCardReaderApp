import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebcamModule } from 'ngx-webcam';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { CameraWindowComponent } from './components/camera-window/camera-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFireModule, FirebaseFirestore } from '@angular/fire';
// import { AngularFirestore } from '@angular/fire/firestore';

import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsersService } from './user/users.service';
import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CameraWindowComponent,
    BusinessCardComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthGuardService, AuthService, AngularFireAuth, UsersService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
