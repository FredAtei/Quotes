import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Love', 'Spread love everywhere you go'),
    new Quote(2, 'Growth', 'When you reach the end of your rope, tie a knot in it and hang on'),
    new Quote(3, 'Happiness', 'Whoever is happy will make others happy too'),
    new Quote(4, 'Life', 'In the end, it is not the years in your life that count. It is the life in your years'),
  ]

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
