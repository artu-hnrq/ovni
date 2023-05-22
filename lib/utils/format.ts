import moment from "moment"
moment.locale('pt-br')

export function format_datetime(datetime: string, format: string = 'DD/MM/YYYY HH:mm') {
    return moment(datetime).format(format)
}
