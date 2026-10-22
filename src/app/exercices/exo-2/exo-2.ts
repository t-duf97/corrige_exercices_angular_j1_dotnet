import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-2',
  imports: [FormsModule],
  templateUrl: './exo-2.html',
  styleUrl: './exo-2.scss',
})
export class Exo2 {
  isOn = signal(true);
  clicks = signal(0);
  text = signal('');

  toggle() {
    this.isOn.update((on) => !on);
  }

  count() {
    this.clicks.update((c) => c + 1);
  }
}
