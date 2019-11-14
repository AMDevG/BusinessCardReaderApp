import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { CameraWindowComponent } from './components/camera-window/camera-window.component';
import { AuthGuardService } from './auth-guard.service';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AuthService } from './auth.service';


const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {path: 'dash', component: DashBoardComponent , canActivate: [AuthService]},
//   {path: 'scan', component: CameraWindowComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
