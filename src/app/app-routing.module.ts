import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CameraWindowComponent } from './camera-window/camera-window.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'scan', pathMatch: 'full'},
  {path: 'scan', component: CameraWindowComponent, canActivate: [AuthGuardService] },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
