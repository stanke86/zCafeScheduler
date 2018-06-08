import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { TimeSlotComponent } from './time-slot/time-slot.component';
import { TableComponent } from './table/table.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulerState } from '../model/scheduler-state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MobxAngularModule
  ],
  declarations: [
    TimeSlotComponent,
    TableComponent,
    ScheduleComponent
  ],
  providers: [SchedulerState],
  exports: [ScheduleComponent]
})
export class FeaturesModule { }
