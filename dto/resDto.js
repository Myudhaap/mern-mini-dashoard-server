export class Response {
    constructor(statusCode, message, data, pages = null){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        this.pages = pages
    }
}