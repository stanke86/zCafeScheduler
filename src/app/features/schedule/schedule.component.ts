import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SchedulerState } from '../../model/scheduler-state';

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

  constructor(private schedulerState: SchedulerState) {
    window.MyNamespace.state = schedulerState;
  }

  ngOnInit() {
  }


}
