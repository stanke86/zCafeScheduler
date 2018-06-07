import { observable } from 'mobx-angular';
import { TimeSlot } from './time-slot';
import { Injectable } from '@angular/core';

@Injectable()
export class SchedulerState {
    @observable timeSlots: Array<TimeSlot> = [
        new TimeSlot(new Date(), new Date(), 17, 3, 6),
        new TimeSlot(new Date(), new Date(), 17, 3, 6),
        new TimeSlot(new Date(), new Date(), 17, 3, 6),
        new TimeSlot(new Date(), new Date(), 17, 3, 6),
        new TimeSlot(new Date(), new Date(), 17, 3, 6),
        new TimeSlot(new Date(), new Date(), 17, 3, 6)
    ];
}
