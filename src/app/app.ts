import { Component, signal } from '@angular/core';
import { Playertable } from './playertable/playertable';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Playertable],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nba-app');
}
