import { TimeSlot } from "./time-slot";

export class Table {
    public participants: Array<string> = [];

    constructor(public tableNumber: number, public capacity: number, public timeSlot: TimeSlot) {

    }
}
