const BASE_URL = 'https://artu-hnrq.api.stdlib.com/ovni@dev/'
const API_KEY = 'tok_dev_qmjGunnSSfZkSD3EGX9DJiwzCHj4oZNJKKvhR5q4bqanVkVjRPxdHNkqCiDkNepZ'


export class API {
    constructor(host, API_KEY) {
        this.base_url = new URL(host)
        this.headers = {
            'Authorization': 'Bearer ' + API_KEY
        }
    }

    register_action(title, method, path, headers) {
        this[title] = new Endpoint(
            this,
            method,
            path,
            headers
        )
    }
}

export class Endpoint {
    constructor(api, method, path, headers) {
        this.api = api
        this.method = method
        this.url = new URL(path, api.base_url)
        this.headers = {
            ...api.headers,
            ...headers
        }
    }

    body(params) {
        return JSON.stringify(params)
    }

    get request() {
        return async function _fetch(params) {
            const response = await fetch(
                this.url,
                {
                    method: this.method,
                    headers: this.headers,
                    body: this.body(params),
                    next: {
                        revalidate: 300
                    }
                }
            )
            return response.json()
        }
    }
}


// class Callable extends Function {
//     constructor(f) {
//         return Object.setPrototypeOf(f, new.target.prototype);
//     }
// }

// export class Endpoint2 extends Callable {
//     constructor(method, path, headers = {}, f) {
//         this.me
//         super(
//             async function (params) {
//                 const response = await fetch(
//                     BASE_URL + path,
//                     {
//                         method: 'POST',
//                         headers: {
//                             'Accept': 'application/json',
//                             'Content-Type': 'application/json',
//                             'Authorization': 'Bearer ' + API_KEY
//                         },
//                         body: JSON.stringify(params),
//                         next: {
//                             revalidate: 300
//                         }
//                     }
//                 )

//                 return response.json()
//             }
//         )
//     }
// }

// export class AirtableEndpoint extends Endpoint {
//     constructor(table, action) {
//         super(`airtable/${table}/${action}/`)
//     }
// }

// export class MockedEndpoint extends Callable {
//     constructor(table, action) {
//         super(
//             function (params) {
//                 return require(`./mock/${table}/${action}.json`)
//             }
//         )
//     }
// }

// export class Entity {
//     constructor(table) {
//         this.table = table

//         let EndpointWrapper = process.env.DEBUG ? MockedEndpoint : AirtableEndpoint
//         this.retrieve = new EndpointWrapper(table, 'retrieve')
//         this.list = new EndpointWrapper(table, 'list')
//     }
// }