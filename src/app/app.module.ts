import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {WebcamModule} from 'ngx-webcam';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { CameraWindowComponent } from './camera-window/camera-window.component';

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
    FormsModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
