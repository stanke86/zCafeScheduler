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

    hasParticipant(participantName: string) {
        return this.participants.indexOf(participantName) !== -1;
    }

    removeParticipant(participantName: string) {
        const index = this.participants.indexOf(participantName);

        if (index !== -1) {
            this.participants.splice(index, 1);
        }
    }

    get isFull() {
        return this.capacity === this.participants.length;
    }

    isParticipantInTimeSlot(participantName: string): boolean {
        for (let index = 0; index < this.timeSlot.tables.length; index++) {
            const currentTable = this.timeSlot.tables[index];
            if (currentTable.hasParticipant(participantName)) {
                return true;
            }
        }

        return false;
    }
}
