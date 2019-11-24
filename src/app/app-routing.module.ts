import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { CameraWindowComponent } from './components/camera-window/camera-window.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {path: 'dash', component: DashBoardComponent, canActivate: [AuthGuard]},
//   {path: 'scan', component: CameraWindowComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
