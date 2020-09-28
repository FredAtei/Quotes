import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Mother Teresa', 'Spread love everywhere you go. Let no one ever come to you without leaving happier', new Date(2020, 10, 12)),
    new Quote(2, 'Franklin D. Roosevelt', 'When you reach the end of your rope, tie a knot in it and hang on.', new Date(2020, 9, 30)),
    new Quote(3, 'Margaret Mead', 'Always remember that you are absolutely unique. Just like everyone else.', new Date(2020, 8, 29)),
    new Quote(4, 'Robert Louis Stevenson', 'Dont judge each day by the harvest you reap but by the seeds that you plant.', new Date(2020, 10, 12)),
  ]

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  addUpVote(index) {
    this.quotes[index].upVote++;
  }
  addDownVote(index) {
    this.quotes[index].downVote++;
  }
  highestUpVote() {
    let highestUpVoteQuote = this.quotes[0];
    for (let i = 1; i < this.quotes.length; i++) {
      if (this.quotes[i].upVote > highestUpVoteQuote.upVote) {
        highestUpVoteQuote = this.quotes[i]
      }
    }
    return highestUpVoteQuote
  }

  constructor() { }

  ngOnInit() {
  }

}
