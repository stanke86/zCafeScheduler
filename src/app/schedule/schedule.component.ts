import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TimeSlot } from '../time-slot';
import { Table } from '../table';
import { ToastrService } from 'ngx-toastr';
import { SchedulerState } from '../scheduler-state';

declare global {
  interface Window { MyNamespace: any; }
}

window.MyNamespace = window.MyNamespace || {};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  name = 'milos';

  constructor(private toastrService: ToastrService, private schedulerState: SchedulerState) {
    window.MyNamespace.state = schedulerState;
  }

  ngOnInit() {
  }

  applyForTable(table: Table) {
    const participantIndex = table.participants.indexOf(this.name);
    if (participantIndex !== -1) {
      table.participants.splice(participantIndex, 1);
      this.toastrService.info('You are removed from the selected table');
      return;
    }

    let isInSameSlot = false;

    if (table.participants.length === table.capacity) {
      this.toastrService.error('Table is already full! Please choose another time slot or table');
      return;
    }

    for (let index = 0; index < table.timeSlot.tables.length; index++) {
      const currentTable = table.timeSlot.tables[index];
      if (currentTable.participants.indexOf(this.name) !== -1) {
        this.toastrService
          .error('You can\'t be in the same time slot twice! You are already assigned for table #' + currentTable.tableNumber);
        isInSameSlot = true;
        return;
      }
    }

    table.participants.push(this.name);
    this.toastrService.success('You have applied successfully!');
  }

}
