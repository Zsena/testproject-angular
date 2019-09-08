import { Component, OnInit, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { parse } from 'url';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})

export class Test1Component implements OnInit {
  public title: string = "Hello World!"
  public description: string = "Lorem ipsum sit amet dolor! Lorem ipsum sit amet dolor...";
  public id: number = 1;
  public itemImageUrl: any = "http://placekitten.com/g/300/150";
  public cardArray: Array<CardDetails> = new Array<CardDetails>();
  public findInput:string = null;
  public filterInput:string = null;
  public forEachInput:string = null;
  public someInput:string = null;
  public filteredCards: Array<CardDetails> = new Array<CardDetails>();
  public newDesc: string = "This is already a new description!";
  public bool: boolean;
  public showMyMessage: boolean = false;

  public historyArray: Array<HistoryData> = new Array<HistoryData>()
  

  constructor() {
   
  }

  ngOnInit() {
    this.showCards(); // meghívom hogy alap esetben lefusson a function 
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

   public showCards() : void { // megjelenítem a kártyákat, nincs visszatérési értéke
    for( var i = 0; i < 6; i++) {//számláló: 6 db kártyát ad vissza
      this.cardArray.push(new CardDetails(this.title, this.description, this.randomLikeNumber(),this.randomLikeNumber(), null, null, []));
      //a cardArray változóm, ami egy CardDetails Array, hozzá adom ezeket az adatokat amit lentebb definiáltam a CardDetails osztályban
    } 
   }
   //a generate cards nevü gombomra van ráhelyezve a function ami kigenerál egy plusz kártyát 
   public generateNewCards(): void {
      this.cardArray.push(new CardDetails(this.title, this.description, this.randomLikeNumber(),this.randomLikeNumber(), null,  null, []));
      this.showLikes(); // a kártyán lévő lájkokat figyeltetem itt is // itt a this.title pl a fenti title beégetett változó
   }

   public randomLikeNumber(): number { // a showCards, és a generateNewCards-ban használom mint a CardDetails id, és likeNum property-jében. 
     return Math.floor(Math.random() * 1000) + 1; //1-100 között generálok egy random számot
   }

   public max(): number { //max kiválasztás
    let max = 0; //segédváltozó
    for( var i = 0; i < this.cardArray.length; i++) { // végigiterálok a kártyákon és amíg nem érem el a kártyák végét
     if(this.cardArray[i].likeNum > max) {//ha a káryan lévő egyik adat likeNum-ja nagyobb min a max segédváltozó
       max = this.cardArray[i].likeNum; //akkor max érékül kapja ezt a likeNum számot
     } //mert elérem a CardDeatils property-jét mivel egy egész kártyám van ami egy CardDetails
    }
    return max; //mert összehasonlitom a data-likeNum-al ezt a max értéket
  }

   public min(): number { //min kiválasztás
    let min = this.cardArray[0].likeNum; //itt nem lehet nulla mert akkor soha nem menne bele az elágazásba, mert mindig kisebb lenne
    for( var i = 0; i < this.cardArray.length; i++) {//többi ugyanaz mint a max-nál
      if(this.cardArray[i].likeNum < min) {
        min = this.cardArray[i].likeNum;
      }
    }
    return min;
  }

  public showLikes(): number {
    let likes = 0;
    for( var i = 0; i < this.cardArray.length; i++) { //hasonló mint fentebb csak itt a lájkok számát adja vissza összesen a gombra kattintva
      if(this.cardArray[i].likeNum) {
       likes = likes + this.cardArray[i].likeNum;
      }
    }
    return likes;
  }

  public onKey(card:CardDetails) { // paraméter, aminek osztály típusa van? ---- a data a html-ben ez a kártya
    let comment: CommentData = new CommentData (card.name, card.input, this.randomLikeNumber());

    card.comments.push(comment); //onkey metódus, ami a comments array-be ami CommetData osztály a tipusa, hozzáad, felépít egy új CommentData objektumot, 
                                                                  // ami kettő propertyt vár a kártyán lévő névinput és input //ezekkel azonosítom a html-be
    card.input = null; //miután bepusholtam az adatokat utána nullázom a comment inputját

    this.historyArray.push(new HistoryData (comment, card.id, new Date()));
  }
 
  public findIndex(id:number):number { //id paraméter, aminek a típusa legyen szám
    return this.cardArray.findIndex(card => card.id == id); //a cardról honnan tudja azt hogy ez itt most egy CardDetails lesz? -----
    /* for(let i = 0; i<this.cardArray.length; i++){ // ez ugyanaz mint a findIndex
      if(this.cardArray[i].id == id){
        return i;
      }
    } */
  }

  public deleteCards(): void {
    let id = this.findIndex(this.id);
    this.cardArray.splice(id, 1);
    this.showLikes();
  }

  public showMessageSoon (): void {
    setTimeout(() => {
      this.showMyMessage = true
    }, 3000)
  }

  public add(id:number): void {
    let details = this.cardArray.find(card => card.id == id); 
    if(details.likeNum < 100) {
      details.likeNum++;
      this.showLikes();
    }
  }

  public reduce(card:CardDetails): void{
    if (card.likeNum > 0) {
      card.likeNum--;
      this.showLikes();
    }
  }

  public deleteThisCards(card: CardDetails) {
    let index = this.findIndex(card.id);
    this.cardArray.splice(index, 1);
    this.showLikes();
  }

  public deleteItems(row: HistoryData) {
    let commentId = this.historyArray[0].historyId;
    this.historyArray.splice(commentId, 1 );
  }

}

export class CardDetails {
  constructor(public title: string, public description: string, public id: number, public likeNum: number , public input: string, public name: string, public comments: Array<CommentData>) {
    
  }
} 

export class CommentData {
  constructor(public name: string, public comment: string, public id: number, public isHighlighted: boolean = false) {

  }
}

export class HistoryData {
  constructor (public comment: CommentData, public historyId: number, public date: Date) {

  }
}