import { Component, OnInit, Input } from '@angular/core';
import { TimeSlot } from '../model/time-slot';
import { Table } from '../model/table';
import { ToastrService } from 'ngx-toastr';
import { SchedulerState } from '../model/scheduler-state';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {

  @Input() timeSlot: TimeSlot;

  constructor(private toastrService: ToastrService, private schedulerState: SchedulerState) { }

  ngOnInit() {
  }

  applyForTable(table: Table) {
    if (table.hasParticipant(this.schedulerState.userName)) {
      table.removeParticipant(this.schedulerState.userName);
      this.toastrService.info('You are removed from the selected table');
      return;
    }

    if (table.isFull) {
      this.toastrService.error('Table is already full! Please choose another time slot or table');
      return;
    }

    if (table.isParticipantInTimeSlot(this.schedulerState.userName)) {
      this.toastrService
        .error('You can\'t be in the same time slot twice!');
      return;
    }

    table.participants.push(this.schedulerState.userName);
    this.toastrService.success('You have applied successfully!');
  }

}
