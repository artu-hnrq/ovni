import { Table, RecordId } from './__main__'

type place_id = string
type coordinate = string
type image = {
    url: string,
}

declare namespace Ovni {

    interface OVNITable extends Table {
        record_id: RecordId,
    }

    export interface Event extends OVNITable {
        __table__: 'Event',

        event: RecordId
        title: string,
        subtitle: string
        start: string,
        end: string,
        thumbnail: URL
    }

    export interface Tour extends OVNITable {
        __table__: 'Tour',

        event: RecordId
        title: string,
        subtitle: string
        thumbnail: image[],
        heading: string,
        datetime: string,

        destination: RecordId,
        destination_place_id: place_id
        destination_coordinate: coordinate

        trips: RecordId[],
        paths: RecordId[],
        avaiability: number,
        occupancy: number,
        capacity: number,

        batches: RecordId[],
        revenue: number,
        average_price: number,

    }

    export interface Trip extends OVNITable {
    }

    export type WaypointType = "Embarque" | "Parada" | "Destino"

    export interface Waypoint extends OVNITable {
        __table__: 'Waypoint',

        index: number,
        type: string,
        place: RecordId,
        title: string,
        detail: string,
        coordinate: coordinate,
        place_id: place_id,
        google_maps_url: string,
        embed_url: string,

        tickets: RecordId[],
        passengers: RecordId[],
        passengers_count: number,
    }

    export interface Place extends OVNITable {
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

        status
        // paths: RecordId[],

    }



    export interface Batch extends OVNITable {
        __table__: 'Batch',

        title: string,
        heading: string,
        caption: string
        description: string
        thumbnail: image[],

        tour: RecordId
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

    export interface Order extends OVNITable {
        __table__: 'Order',

        id: number,
        datetime: string,
        user: RecordId,
        buyer_name: string,
        tour: RecordId,
        batch: RecordId,
        total: number,
        tickets: RecordId[],
        ticket_count: number,
        receipt: image[],
        status: OrderStatus,

    }
}

export default Ovni