import { Table, RecordId, AirtableSDK, base } from './__main__'
// let TABLE = "Tour"

/*
* Ovni base Tour management API
*/

export default interface Tour extends Table {
  __table__: 'Tour',
  record_id: RecordId,

  title: String,
  subtitle: String
  datetime: String,
  thumbnail: any[],
}

// async function create(event) {
//   tour = await airtable.create(TABLE, {
//     event: [event]
//   })

//   product = await stripe.Product.create_from_tour(tour)

//   // console.log(product);

//   return tour
// }

// async function retrieve({ id }: { id: RecordId }): Promise<Tour> {
//   return await base(TABLE).find(id);
// }

// async function select(): Promise<Tour[]> {
//   let page = await base(TABLE).select().firstPage()

//   function extract_fields(record: any): Tour {
//     return record.fields
//   }

//   return page.map(extract_fields)
// }

// export const TourSDK = {
//   TABLE: TABLE,
//   // create: create,
//   // retrieve: retrieve,
//   select: select,
// }
