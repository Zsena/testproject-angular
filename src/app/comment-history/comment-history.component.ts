import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HistoryData, CommentData } from '../card/comments-config';

@Component({
  selector: 'app-comment-history',
  templateUrl: './comment-history.component.html',
  styleUrls: ['./comment-history.component.scss']
})
export class CommentHistoryComponent implements OnInit {
  public historyTableData: HistoryData;

  @Input ("historyTableData") set s_array(config: HistoryData) {
    this.historyTableData = config;
  }

  @Output ("highlightComment") clickEmitter: EventEmitter<HistoryData> = new EventEmitter<HistoryData>();

  @Output ("deleteRow") delEmitter: EventEmitter<HistoryData> = new EventEmitter<HistoryData>();

  constructor() { }

  ngOnInit() {
  }

  public callHighlight (): void {
    this.clickEmitter.emit(this.historyTableData);
  }

  public callDeleteRow (): void {
    this.delEmitter.emit(this.historyTableData);
  }

}
