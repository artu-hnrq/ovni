import Airtable from "airtable";
export const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(process.env.AIRTABLE_BASE_ID || '');


export type RecordId = string

export interface Table { }

export interface Record<T extends Table> {
  id: RecordId,
  fields: T
  createdTime: string,
}

export class _AirtableSDK<T extends Table> {
  table: any;

  constructor(table_name: string) {
    this.table = base(table_name)
  }

  // get table_name(): String {
  //   return (<any>this).constructor.name;
  // }

  async create(records: T[]): Promise<T[]> {
    let record = await this.table.create(records)
    return record
  }

  async find(id: RecordId): Promise<T> {
    let record = await this.table.find(id);
    return record.fields
  }

  async select(args: any): Promise<T[]> {
    let page = await this.table.select(args).firstPage()

    function extract_fields(record: Record<T>): T {
      return record.fields
    }

    return page.map(extract_fields)
  }
}

export class AirtableSDK<T extends Table> {
  table: any;

  constructor(table_name: string) {
    this.table = table_name
  }

  // get table_name(): String {
  //   return (<any>this).constructor.name;
  // }

  async create(records: T[]): Promise<T[]> {
    let record = await this.table.create(records)
    return record
  }

  async find(id: RecordId): Promise<T> {
    let response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${this.table}/${id}`)
    let record = await response.json()

    return record.fields
  }

  async select(params: any): Promise<T[]> {
    let args = new URLSearchParams(params)

    let response = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${this.table}/?${args}`)
    let records = await response.json()

    function extract_fields(record: Record<T>): T {
      return record.fields
    }

    return records.map(extract_fields)
  }
}