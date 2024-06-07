export class ResponsePagination {
    constructor(page, perPage, totalPage, totalRecord){
        this.page = page
        this.perPage = perPage
        this.totalPage = totalPage
        this.totalRecord = totalRecord
    }
}