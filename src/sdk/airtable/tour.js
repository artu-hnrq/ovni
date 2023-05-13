const airtable = require('./__main__')
const TABLE = 'Tour'

/*
* Ovni base Tour management API
*/

async function create(event) {
  tour = await airtable.create(TABLE, {
    event: [event]
  })

  product = await stripe.Product.create_from_tour(tour)

  // console.log(product);

  return tour
}

async function retrieve({ id }) {
  return await airtable.find(TABLE, id);
}

async function list() {
  return await airtable.select(TABLE);
}

module.exports = {
  TABLE: TABLE,
  create: create,
  retrieve: retrieve,
  list: list,
}