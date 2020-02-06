import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardDetails } from './card-config';
import { CommentData, HistoryData } from './comments-config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public itemImageUrl: any = "http://placekitten.com/g/300/150";
  public card: CardDetails;


  @Input ("card") set s_config(config: CardDetails) {
    this.card = config;
  }

  @Output ('delete') enterEmitter: EventEmitter<number> = new EventEmitter<number>();

  @Output ('push') pushEmitter: EventEmitter<HistoryData> = new EventEmitter<HistoryData>();

  constructor() { }

  ngOnInit() {
  }

  public callPushTable(data: HistoryData): void {
    this.pushEmitter.emit(data);
  }

  public cardInputOnKey() {
    let commentSection: CommentData = new CommentData (this.card.name, this.card.input, this.randomLikeNumber());
    this.card.comments.push(commentSection);
    this.card.input = null;
    let historyData: HistoryData = new HistoryData (commentSection, this.card.id, new Date());
    this.callPushTable(historyData);
  }

  public callRemoveCard(): void {
    this.enterEmitter.emit(this.card.id);
  }

  public randomLikeNumber(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  public add(): void {
    if( this.card.likeNum < 1000) {
        this.card.likeNum++;
    }
  }

  public reduce(): void {
    if( this.card.likeNum > 0) {
      this.card.likeNum--;
    }
  }
}
