import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';


const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {path: 'dash', component: DashBoardComponent, canActivate: [AuthGuard]},
  {path: 'new', component: BusinessCardComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
