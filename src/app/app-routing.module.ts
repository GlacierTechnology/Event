import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupeventComponent } from './eventdash/setupevent/setupevent.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', loadChildren: 'src/app/eventdash/eventdash.module#EventdashModule'},
  { path: 'account', component: AccountComponent},
  { path: 'log', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
