import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WebcamModule } from 'ngx-webcam';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { CameraWindowComponent } from './camera-window/camera-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CameraWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuardService, AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
