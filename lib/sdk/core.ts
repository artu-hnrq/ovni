const lib = require('lib')({ token: process.env.AUTOCODE_API_TOKEN });
const BASE_ID = 'app2raT2vCYQJoYq0'


export type RecordId = string

export interface Table { }

export interface Record<T extends Table> {
    id: RecordId,
    fields: T
    createdTime: string,
}

export class AirtableSDK<T extends Table> {
    table: any;

    constructor(table: string) {
        this.table = table
    }

    // async create(records: T[]): Promise<T[]> {
    //     let record = await this.table.create(records)
    //     return record
    // }

    async retrieve(id: RecordId): Promise<T> {
        let record: Record<T> = await lib.airtable.query['@1.0.0'].records.retrieve({
            // baseId: BASE_ID,
            table: this.table,
            id: id,
        });
        return record.fields
    }

    async list(params: { formula?: string, sort?: sort } = {}): Promise<T[]> {
        let result = await lib.airtable.query['@1.0.0'].records.find.formula({
            // baseId: BASE_ID,
            table: this.table,
            ...params
        })

        return result.map((record: Record<T>) => record.fields)
    }
}

export type sort = Array<{ field: string, direction: 'asc' | 'desc' }>
