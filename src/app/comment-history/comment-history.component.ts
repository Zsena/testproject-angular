import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HistoryData } from '../card/comments-config';

@Component({
  selector: 'app-comment-history',
  templateUrl: './comment-history.component.html',
  styleUrls: ['./comment-history.component.scss']
})
export class CommentHistoryComponent implements OnInit {
  public historyTable: HistoryData;

  @Input ("historyTable") set s_array(config: HistoryData) {
    this.historyTable = config;
  }

  constructor() { }

  ngOnInit() {
  }

}
