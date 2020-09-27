import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Love', 'Spread love everywhere you go', new Date()),
    new Quote(2, 'Growth', 'When you reach the end of your rope, tie a knot in it and hang on', new Date()),
    new Quote(3, 'Happiness', 'Whoever is happy will make others happy too', new Date()),
    new Quote(4, 'Life', 'In the end, it is not the years in your life that count. It is the life in your years', new Date()),
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date()),
    new Quote(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date()),
  ]

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
