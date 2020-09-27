import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    // { id: 1, name: 'Love' },
    // { id: 2, name: 'Growth' },
    // { id: 3, name: 'Happiness' },
    // { id: 4, name: 'Life', },
  ]
}
