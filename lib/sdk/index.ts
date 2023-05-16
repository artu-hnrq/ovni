import { AirtableSDK } from './__main__'
import Tour from './tour'

export default {
    Tour: new AirtableSDK<Tour>('Tour'),
    // Tour: TourSDK,

}