import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSlotComponent } from './time-slot/time-slot.component';
import { TableComponent } from './table/table.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SchedulerState } from './model/scheduler-state';

@NgModule({
  declarations: [
    AppComponent,
    TimeSlotComponent,
    TableComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MobxAngularModule
  ],
  providers: [SchedulerState],
  bootstrap: [AppComponent]
})
export class AppModule { }
