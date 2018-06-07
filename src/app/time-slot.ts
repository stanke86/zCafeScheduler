import { Table } from './table';
import { observable } from 'mobx-angular';

export class TimeSlot {

    @observable tables: Array<Table> = [];

    @observable start: Date;
    @observable end: Date;
    @observable durationMinutes: number;
    @observable switchDurationMinutes: number;
    @observable numberOfTables: number;

    constructor(
        start: Date,
        end: Date,
        durationMinutes: number,
        switchDurationMinutes: number,
        numberOfTables: number
    ) {
        this.start = start;
        this.end = end;
        this.durationMinutes = durationMinutes;
        this.switchDurationMinutes = switchDurationMinutes;
        this.numberOfTables = numberOfTables;

        for (let i = 0; i < numberOfTables; i++) {
            this.tables.push(new Table(i + 1, 7, this));
        }
    }
}
