export class MessageBoard {
  constructor (public id: number, public created: Date, public postTitle: string, public name: string, public numLikes: number, public text: string, public isHighlighted: boolean = false ) {

  }
} 