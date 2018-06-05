import { Table } from "./table";

export class TimeSlot {

    public tables: Array<Table> = [];

    constructor(
        public start: Date,
        public end: Date,
        public durationMinutes: number,
        public switchDurationMinutes: number,
        public numberOfTables: number
    ) {
        for (let i = 0; i < numberOfTables; i++) {
            this.tables.push(new Table(i + 1, 7, this));
        }
    }
}
