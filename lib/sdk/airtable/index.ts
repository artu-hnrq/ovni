import { AirtableSDK } from './__main__'
import { AirtableAPI } from './core'
import Ovni from './types'


// TODO: get sdk table name argument from type template
export default {
    Tour: new AirtableAPI<Ovni.Tour>('Tour'),
    // Trip: new AirtableAPI<Ovni.Trip>('Trip'),
    Waypoint: new AirtableAPI<Ovni.Waypoint>('Waypoint'),

    Batch: new AirtableAPI<Ovni.Batch>('Batch'),
    Order: new AirtableAPI<Ovni.Order>('Order'),
    // Ticket: new AirtableAPI<Ovni.Ticket>('Ticket'),

    // User: new AirtableAPI<Ovni.User>('User'),
}

export type { Ovni }
