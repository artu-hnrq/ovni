const Airtable = require("airtable");
export const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(process.env.AIRTABLE_BASE_ID);


export type RecordId = String

export interface Table { }

export interface Record<T extends Table> {
  id: RecordId,
  fields: T
  createdTime: String,
}


export class AirtableSDK<T extends Table> {
  table: any;

  constructor(table_name: String) {
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

  async select(): Promise<T[]> {
    let page = await this.table.select().firstPage()

    function extract_fields(record: Record<T>): T {
      return record.fields
    }

    return page.map(extract_fields)
  }
}

// async function find(table, formula = {}, sort_by = null, direction = 'asc') {
//   let sort = sort_by ? { field: sort_by, direction: direction } : {}

//   let qs = serializeQuery(formula)
//   console.log(qs)

//   let endpoint = new URL(
//     `https://api.airtable.com/v0/${BASE_ID}/${table}?${qs}`

//   )

//   return await fetch(
//     endpoint,
//     {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + process.env.AIRTABLE_API_TOKEN
//       },
//       next: {
//         revalidate: 300
//       }
//     }
//   )

//   return records.map(r => r.fields)
// }


// UTILS

// export function serializeQuery(params, prefix) {
//   const query = Object.keys(params).map((key) => {
//     const value = params[key];

//     if (params.constructor === Array)
//       key = `${prefix}[]`;
//     else if (params.constructor === Object)
//       key = (prefix ? `${prefix}[${key}]` : key);

//     if (typeof value === 'object')
//       return serializeQuery(value, key);
//     else
//       return `${key}=${encodeURIComponent(value)}`;
//   });

//   return [].concat.apply([], query).join('&');
// }