import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebcamModule } from 'ngx-webcam';
import { AuthService } from './auth.service';
import { LoginComponent } from './components/login/login.component';
import { CameraWindowComponent } from './components/camera-window/camera-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsersService } from './user/users.service';
import { UploadService } from './upload.service';
import { HttpClientModule } from '@angular/common/http';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { BusinessCard } from './business-card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusinessCardComponent,
    DashBoardComponent,
    CameraWindowComponent,
    TopNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AngularFireAuth,
              UsersService, UploadService, Title, BusinessCard],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
