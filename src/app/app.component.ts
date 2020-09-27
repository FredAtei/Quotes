import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    { id: 1, name: 'Love', description: 'Spread love everywhere you go' },
    { id: 2, name: 'Growth', description: 'When you reach the end of your rope, tie a knot in it and hang on.' },
    { id: 3, name: 'Happiness', description: 'Whoever is happy will make others happy too.' },
    { id: 4, name: 'Life', description: 'In the end, it is not the years in your life that count. It is the life in your years.' },

  ]
}
