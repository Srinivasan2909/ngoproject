import { StatusComponent } from './status/status.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrequestComponent } from './addrequest/addrequest.component';


const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'register', component: RegisterComponent},
  {path:'home',  component: HomeComponent},
  {path:'home/addrequest', component: AddrequestComponent},
  {path:'home/status', component: StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
