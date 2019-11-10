import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CameraWindowComponent } from './camera-window/camera-window.component';

const routes: Routes = [
  {path: '', redirectTo: CameraWindowComponent, pathMatch: full},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
