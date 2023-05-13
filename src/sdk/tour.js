import { API, Endpoint } from './core'

class AirtableAPI extends API {
    constructor(base_id) {
        super(
            `https://api.airtable.com/v0/${base_id}`,
            process.env.AIRTABLE_API_TOKEN
        )
    }

    endpoint(method, path, headers) {
        return new Endpoint(
            this,
            method,
            path,
            headers
        )
    }

    get retrieve() {
        return this.endpoint('GET',)
    }
}

class OvniBaseAPI extends AirtableAPI {
    constructor(base_id = 'app2raT2vCYQJoYq0') {
        super(base_id)
    }
}

class Entity {
    constructor(api, table) {

    }

    retrieve() {

    }
}



Tour = new OvniBaseAPI()