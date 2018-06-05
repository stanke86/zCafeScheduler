import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { TableComponent } from './table/table.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeSlotComponent,
    TableComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
