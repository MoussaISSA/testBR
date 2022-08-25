import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { auditTime } from 'rxjs';
import { DataComponent } from './pages/data/data.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './_service/auth.guard';

const routes: Routes = [
  {
    path : '', redirectTo : 'login', pathMatch : 'full'
  },
  {
    path : 'login',component : LoginComponent
  },
  {
    path : 'data',component : DataComponent, canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
