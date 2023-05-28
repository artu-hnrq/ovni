import { Table as Airtable, RecordId } from './__main__'

type place_id = string
type coordinate = string
type image = {
    url: string,
}


declare namespace Ovni {

    interface Table extends Airtable {
        record_id: RecordId,
    }

    export interface Event extends Table {
        __table__: 'Event',

        title: string,
        subtitle: string
        image: image[]
        start: string,
        end: string,
        heading: string,
        location: RecordId
        // place_id: place_id
        // coordinate: coordinate
        tour: RecordId,
    }

    export interface Tour extends Fillable, Table {
        __table__: 'Tour',

        event: RecordId
        title: string,
        subtitle: string
        thumbnail: image[],
        heading: string,
        datetime: string[],

        destination: RecordId[],
        destination_place_id: place_id[]
        destination_coordinate: coordinate[]

        trips: RecordId[],
        paths: RecordId[],
        capacity: number,
        avaiability: number,
        occupancy: number,

        batches: RecordId[],
        revenue: number,
        average_price: number,

    }

    export interface Trip extends Fillable, Table {
        __table__: 'Trip',

        tour: RecordId,
        title: string,
        departure: string,

        routes: RecordId[],
        origin: string,
        // origin_place_id: place_id,
        route_description: string,
        // route_coordinates: string,
        // route_place_id: place_id,
        destination: RecordId[],
        // destination_coordinate: coordinate,
        // destination_place_id: place_id,

        tickets: RecordId[],
        passengers: RecordId[],
        capacity: number,
        avaiability: number,
        occupancy: number,

        google_maps_url: string,
        embed_url: string,
    }

    export type WaypointType = "Embarque" | "Parada" | "Destino"

    export interface Waypoint extends Table {
        __table__: 'Waypoint',

        tour: RecordId,
        trip: RecordId,
        trip_departure: string,

        index: number,
        type: WaypointType,
        place: RecordId,

        title: string,
        detail: string,

        coordinate: coordinate,
        place_id: place_id,
        google_maps_url: string,
        embed_url: string,

        tickets: RecordId[],
        passengers: RecordId[],
        passenger_count: number,
    }

    export interface Place extends Table {
        __table__: 'Place',

        title: string,
        detail: string,

        formatted_address: string,
        city: string,
        state: string,
        country: string,

        latitude: number,
        longitude: number,
        coordinate: coordinate,
        plus_code: string,
        place_id: place_id,

        google_maps_url: string,
        embed_url: string,
        geocode_api_url: string,

        // status: "Complete" | undefined,
        // paths: RecordId[],
        // events: RecordId[],

    }


    export interface Batch extends Table {
        __table__: 'Batch',

        title: string,
        heading: string,
        caption: string
        description: string
        thumbnail: image[],

        tour: RecordId[]
        amount: number,
        price: number,
        start: string,
        end: string,

        orders: RecordId[],
        sold: number,
        revenue: number,

        stripe_id: string,
        payment_url: string,
        active: boolean,
    }

    export type OrderStatus = "Aprovado" | "Pendente" | "Recusado"

    export interface Order extends Table {
        __table__: 'Order',

        id: number,

        datetime: string,
        formatted_datetime: string,
        user: RecordId[],
        buyer_name: string,

        tour: RecordId[],
        batch: RecordId[],
        total: number,

        tickets: RecordId[],
        ticket_count: number,
        receipt: image[],
        status: OrderStatus,

    }

    export interface Ticket extends Table {
        __table__: 'Ticket',

        id: number,
        datetime: string,

        order: RecordId[],
        tour: RecordId[],
        trip: RecordId[],
        boarding: RecordId[],
        passenger: RecordId[],

        passenger_name: string,
        passenger_phone: string,

        whatsapp_url: string,
        status: OrderStatus,
    }
}

export default Ovni