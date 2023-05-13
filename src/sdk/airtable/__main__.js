let Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base('app2raT2vCYQJoYq0');

const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN
const BASE_ID = 'app2raT2vCYQJoYq0'

/*
* Ovni API
*/

module.exports.create = async function (table, records) {
  tours = await base(table).create(records)

  return tours
}

module.exports.find = async function (table, id) {
  let record = await base(table).find(id);

  return record.fields
}

module.exports.select = async function (table) {
  let page = await base(table).select().firstPage()

  return page.map(record => record.fields)
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