import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    { id: 1, name: 'Spread love everywhere you go' },
    { id: 2, name: 'Spread love everywhere you go' },
    { id: 3, name: 'Spread love everywhere you go' },
    { id: 4, name: 'Spread love everywhere you go' },
    { id: 5, name: 'Spread love everywhere you go' },
    { id: 6, name: 'Spread love everywhere you go' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
