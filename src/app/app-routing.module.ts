import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CameraWindowComponent } from './camera-window/camera-window.component';
import { AuthGuardService } from './auth-guard.service';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {path: '', redirectTo: 'scan', pathMatch: 'full'},
  {path: 'scan', component: CameraWindowComponent, canActivate: [AuthGuardService]},
  {path: 'file-upload', component: FileUploadComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
