import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './account/account.component';
import { EventdashModule } from './eventdash/eventdash.module';
import { MatFormFieldModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EventdashModule,
    MatFormFieldModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
