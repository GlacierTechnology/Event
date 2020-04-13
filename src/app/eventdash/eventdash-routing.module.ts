import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupeventComponent } from './setupevent/setupevent.component';
import { GuideComponent } from './guide/guide.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateEventComponent } from './create-event/create-event.component';


const routes: Routes = [
  { path:'', component: SetupeventComponent,
  children: [
  { path: 'setup', component: GuideComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'create', component: CreateEventComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventdashRoutingModule { }
