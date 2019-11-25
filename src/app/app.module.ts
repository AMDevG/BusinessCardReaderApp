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
import { UploadService } from './fire-store.service';
import { HttpClientModule } from '@angular/common/http';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { BusinessCardsComponent } from '../app/components/business-cards/business-cards.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusinessCardComponent,
    DashBoardComponent,
    CameraWindowComponent,
    BusinessCardsComponent,
    PageNotFoundComponent,
    GalleryComponent,
    EditCardComponent,
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
  providers: [AuthService, AngularFireAuth, UploadService, Title],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
