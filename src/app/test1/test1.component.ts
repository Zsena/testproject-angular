import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { parse } from 'url';
import { Title } from '@angular/platform-browser';
import { HistoryData, CommentData } from '../card/comments-config';
import { CardDetails } from '../card/card-config';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})

export class Test1Component implements OnInit {
  public mainCard: CardDetails;
  public title: string = "Hello World!"
  public description: string = "Lorem ipsum sit amet dolor! Lorem ipsum sit amet dolor...";
  public id: number = 1;
  public cardArray: Array<CardDetails> = new Array<CardDetails>();
  public historyArray: Array<HistoryData> = new Array<HistoryData>();
  
 /*  public findInput:string = null;
  public filterInput:string = null;
  public forEachInput:string = null;
  public someInput:string = null; */
  /* public filteredCards: Array<CardDetails> = new Array<CardDetails>();
  public newDesc: string = "This is already a new description!";
  public bool: boolean; */
  // public showMyMessage: boolean = false;

  

  /* public posts: Array<MessageBoard> = new Array<MessageBoard>();
  public search: any = null;
  public filteredPosts: Array<MessageBoard> = new Array<MessageBoard>();
 */
  constructor() {
   
  }

  ngOnInit() {
    this.showCards();
  }

  public pushTable(historyData: HistoryData) {
    this.historyArray.push(historyData);
  }

  public removeCard(id: number) {
    this.cardArray.splice(this.cardArray.findIndex(card => card.id == id), 1);
  }

  public onClick() : void {
    /* let index = this.findIndex(this.id);
    if(index != -1) {
      this.showMessageSoon();
    } else {
      this.valueReader();
    } 
    this.randomLikeNumber(); */
   }

   /*  public valueReader() : void {
    this.cardArray.push(new CardDetails(this.title, this.description, this.id, 0, null, []));
  } */

  public showCards() : void { 
    for( var i = 0; i < 6; i++) {
      this.cardArray.push(new CardDetails(this.title, this.description, this.randomLikeNumber(),this.randomLikeNumber(), null, null, []));
    } 
   }

  public max(): number {
    let max = 0;
    for( var i = 0; i < this.cardArray.length; i++) {
     if(this.cardArray[i].likeNum > max) {
       max = this.cardArray[i].likeNum;
     }
    }
    return max;
  }

   public min(): number { 
    let min = this.cardArray[0].likeNum;
    for( var i = 0; i < this.cardArray.length; i++) {
      if(this.cardArray[i].likeNum < min) {
        min = this.cardArray[i].likeNum;
      }
    }
    return min;
  }

  

  public showLikes(): number {
    let likes = 0;
    for( var i = 0; i < this.cardArray.length; i++) {
      if(this.cardArray[i].likeNum) {
       likes = likes + this.cardArray[i].likeNum;
      }
    }
    return likes;
  }

  public randomLikeNumber(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }



   
   public generateNewCards(): void {
      this.cardArray.push(new CardDetails(this.title, this.description, this.randomLikeNumber(),this.randomLikeNumber(), null,  null, []));
      this.showLikes();
   }

  public findIndex(id:number):number {
    return this.cardArray.findIndex(card => card.id == id);
  }

  public deleteCards(): void {
    let id = this.findIndex(this.id);
    this.cardArray.splice(id, 1);
    this.showLikes();
  }

  /* public showMessageSoon (): void {
    setTimeout(() => {
      this.showMyMessage = true
    }, 3000)
  } */

  
  public deleteItems(history: HistoryData): void {
    let commentRow = this.historyArray.findIndex(historyCard => historyCard.comment.id == history.comment.id);
    let card = this.cardArray.find(cardData => cardData.id == history.cardId);
    let commentIndex = card.comments.findIndex(commentId => commentId.id == history.comment.id);
    this.historyArray.splice(commentRow, 1);
    card.comments.splice(commentIndex, 1);
  }

  public highlight(history: HistoryData): void {
    history.comment.isHighlighted = !history.comment.isHighlighted;
  }

  // MessageBoards functions

  /* public showPosts() : void {
    for( var i = 0; i < 6; i++) {
      this.posts.push(new MessageBoard(this.randomLikeNumber(), new Date(), this.generateTitle(), this.generateName(), this.randomLikeNumber(), this.description ));
    } 
   }

   public deletePosts(post2: MessageBoard) {
    let index = this.posts.findIndex(post => post2.id == post.id);
    this.posts.splice(index, 1);
    this.showLikes();
  }

  public capFirst(string:string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  public getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
  }

  public generateTitle(): string {
    let title1 = ["people","history","way","art","world","information","map","family","government","health","system","computer"];
    let title2 = ["abandoned","able","absolute","adorable","adventurous","academic","acceptable","acclaimed","accomplished","accurate","aching","acidic","acrobatic","active","actual","adept"]
    let title = this.capFirst(title1[this.getRandomInt(title1.length , 1)]) + '' + this.capFirst(title2[this.getRandomInt(title2.length , 1)]);
    return title;
  }

  public generateName(): string {
    let names = ["Zsena", "Oli", "Eszter", "Gábor", "Géza", "János"]
    let name = this.capFirst(names[this.getRandomInt(names.length, 1)]);
    return name;
  } */

  /* public onKeySearch () {
    let messageBoardId = this.filteredPosts.filter(messageDatas => messageDatas.id == this.search);
    let messageBoardName = this.filteredPosts.filter(messageDatas => messageDatas.name == this.search);
    
    /* if(messageBoardId) {
      messageBoardId.isHighlighted = !messageBoardId.isHighlighted;
    }
    if (messageBoardName) {
      messageBoardName.isHighlighted = !messageBoardName.isHighlighted;
    } 
  }*/

}

/* export class MessageBoard {
  constructor (public id: number, public created: Date, public postTitle: string, public name: string, public numLikes: number, public text: string, public isHighlighted: boolean = false ) {

  }
} */