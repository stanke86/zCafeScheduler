import { observable, action, computed } from 'mobx-angular';
import { TimeSlot } from './time-slot';
import { Injectable } from '@angular/core';

@Injectable()
export class SchedulerState {
    @observable userName = 'milos';

    @observable timeSlots: Array<TimeSlot> = [
        new TimeSlot('1', new Date(), new Date(), 17, 3, 6),
        new TimeSlot('2', new Date(), new Date(), 17, 3, 6),
        new TimeSlot('3', new Date(), new Date(), 17, 3, 6),
        new TimeSlot('4', new Date(), new Date(), 17, 3, 6),
        new TimeSlot('5', new Date(), new Date(), 17, 3, 6),
        new TimeSlot('6', new Date(), new Date(), 17, 3, 6)
    ];
}
