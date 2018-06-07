import { TimeSlot } from './time-slot';
import { observable } from 'mobx-angular';

export class Table {
    @observable tableNumber: number;
    @observable capacity: number;
    @observable timeSlot: TimeSlot;
    @observable participants: Array<string> = [];

    constructor(tableNumber: number, capacity: number, timeSlot: TimeSlot) {
        this.capacity = capacity;
        this.tableNumber = tableNumber;
        this.timeSlot = timeSlot;
    }
}
