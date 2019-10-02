import { CommentData } from './comments-config';

export class CardDetails {
    constructor(public title: string, public description: string, public id: number, public likeNum: number , public input: string, public name: string, public comments: Array<CommentData>) {
      
    }
} 