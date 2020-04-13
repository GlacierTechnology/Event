import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatDatepickerModule, MatNativeDateModule, MatBadgeModule, MatCardModule, MatChipsModule, MatToolbarModule, MatIconModule, MatExpansionModule} from '@angular/material';
import { EventdashRoutingModule } from './eventdash-routing.module';
import { SetupeventComponent } from './setupevent/setupevent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';
import { GuideComponent } from './guide/guide.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateEventComponent } from './create-event/create-event.component';



@NgModule({
  declarations: [
    SetupeventComponent,
    GuideComponent,
    SettingsComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    EventdashRoutingModule,
    MatStepperModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatRippleModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatBadgeModule, 
    MatCardModule, 
    MatChipsModule, 
    MatToolbarModule, 
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatExpansionModule
  ]
})
export class EventdashModule { }
