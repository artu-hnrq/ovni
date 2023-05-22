import { HTTP_METHOD } from "next/dist/server/web/http"

const BASE_URL = 'https://api.airtable.com/v0/'

const API_KEY = 'patAt9S7Qy2Xs9qRa.88378d4790e028a7fb0f47268a07b66dbfd6512c3010375e30b4148dedf12f57'
const BASE_ID = 'app2raT2vCYQJoYq0'

const lib = require('lib')({ token: 'tok_dev_VZvQyEn1v8sx93C7eviy7djcmQzG6NaB1uop4bpbyn2V39tHboA3ro9WzKRmDXbB' });


export class Endpoint {
    method: HTTP_METHOD
    path: string
    headers: object

    constructor(method: HTTP_METHOD, path: string, headers: object = {}) {
        this.method = method
        this.path = path
        this.headers = headers
    }
}

export class API {
    base_url: string
    headers: object

    constructor(base_url: string, API_KEY: string) {
        this.base_url = base_url
        this.headers = {
            'Authorization': 'Bearer ' + API_KEY
        }
    }

    async request(method: HTTP_METHOD, path: string, body: object = {}) {
        let url = this.base_url + path

        console.log(url)

        const response = await _fetch({
            method,
            url: url,
            headers: this.headers,
            body,
        })
        let json = await response.json()
        return json
    }
}

export type RecordId = string

export interface Table { }

export interface Record<T extends Table> {
    id: RecordId,
    fields: T
    createdTime: string,
}

export type sort = Array<{ field: string, direction: 'asc' | 'desc' }>

export class AirtableAPI<T extends Table> extends API {
    table: string

    constructor(table: string) {
        super(BASE_URL + BASE_ID + '/' + table, API_KEY)
        this.table = table
    }

    async retrieve(id: string): Promise<T> {
        let data: Record<T> = await lib.airtable.query['@1.0.0'].records.retrieve({
            baseId: BASE_ID,
            table: this.table,
            id: id,
        });
        return data.fields
    }

    async list(params: { formula?: String, sort?: sort } = {}): Promise<T[]> {

        let result = await lib.airtable.query['@1.0.0'].records.find.formula({
            baseId: BASE_ID,
            table: this.table,
            ...params
        })

        return result.map((record: Record<T>) => record.fields)
    }

}

export interface FetchArgs {
    method: HTTP_METHOD,
    url: string,
    headers?: object,
    search_params?: object,
    body?: object
}

export async function _fetch({ method, url, headers = {}, body = {} }: FetchArgs) {

    let init: {
        method: HTTP_METHOD,
        headers: object,
        body?: string
        revalidate?: number
    } = {
        method: method,
        headers: headers,
    }


    if (method != 'GET')
        init['body'] = JSON.stringify(body)

    return await fetch(
        // @ts-ignore
        url,
        // @ts-ignore
        init
    )
}