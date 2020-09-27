import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    { id: 1, name: 'Spread love everywhere you go' },
    { id: 2, name: 'Spread love everywhere you go' },
    { id: 3, name: 'Spread love everywhere you go' },
    { id: 4, name: 'Spread love everywhere you go' },
    { id: 5, name: 'Spread love everywhere you go' },
    { id: 6, name: 'Spread love everywhere you go' },
  ]
}
