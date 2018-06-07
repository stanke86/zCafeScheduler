import { Component, OnInit, Input } from '@angular/core';
import { TimeSlot } from '../model/time-slot';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {

  @Input() timeSlot: TimeSlot;

  constructor() { }

  ngOnInit() {
  }

}
