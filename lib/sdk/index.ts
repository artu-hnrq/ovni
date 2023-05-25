import { AirtableSDK } from './core'
import Ovni from './types'


// TODO: get sdk table name argument from type template
export default {

    Tour: new AirtableSDK<Ovni.Tour>('Tour'),
    Trip: new AirtableSDK<Ovni.Trip>('Trip'),
    Waypoint: new AirtableSDK<Ovni.Waypoint>('Waypoint'),
    Place: new AirtableSDK<Ovni.Waypoint>('Place'),

    Batch: new AirtableSDK<Ovni.Batch>('Batch'),
    Order: new AirtableSDK<Ovni.Order>('Order'),
    Ticket: new AirtableSDK<Ovni.Ticket>('Ticket'),
    // User: new AirtableSDK<Ovni.User>('User'),
}

export type { Ovni }
