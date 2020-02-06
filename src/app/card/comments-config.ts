export class CommentData {
    constructor(public name: string, public comment: string, public id: number, public isHighlighted: boolean = false) {
  
    }
}

export class HistoryData {
    constructor (public comment: CommentData, public cardId: number, public date: Date) {
  
    }
}