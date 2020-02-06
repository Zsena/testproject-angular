import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { CardComponent } from './card/card.component';
import { CommentHistoryComponent } from './comment-history/comment-history.component';
import { MessageBoardComponent } from './message-board/message-board.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    CardComponent,
    CommentHistoryComponent,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
