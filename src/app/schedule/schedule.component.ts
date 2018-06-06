import { Component, OnInit } from '@angular/core';
import { TimeSlot } from '../time-slot';
import { Table } from '../table';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  name: string = 'milos';

  timeSlots: Array<TimeSlot> = [
    new TimeSlot(new Date(), new Date(), 17, 3, 6),
    new TimeSlot(new Date(), new Date(), 17, 3, 6),
    new TimeSlot(new Date(), new Date(), 17, 3, 6),
    new TimeSlot(new Date(), new Date(), 17, 3, 6),
    new TimeSlot(new Date(), new Date(), 17, 3, 6),
    new TimeSlot(new Date(), new Date(), 17, 3, 6),
  ]

  constructor() { }

  ngOnInit() {
  }

  applyForTable(table: Table) {
    let isInSameSlot: boolean = false;

    if (table.participants.length === table.capacity) {
      alert('Table is already full! Please choose another time slot or table');
      return;
    }

    for (let index = 0; index < table.timeSlot.tables.length; index++) {
      const currentTable = table.timeSlot.tables[index];
      if (currentTable.participants.indexOf(this.name) !== -1) {
        alert("You can't be in the same time slot twice! You are already assigned for table #" + currentTable.tableNumber);
        isInSameSlot = true;
        return;
      }
    }

    table.participants.push(this.name);
  }

}
