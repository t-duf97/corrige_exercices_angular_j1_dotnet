import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-1',
  imports: [FormsModule],
  templateUrl: './exo-1.html',
  styleUrl: './exo-1.scss',
})
export class Exo1 {
  name = 'Casque audio';
  price = 59.9;
  imageUrl = 'https://picsum.photos/seed/casque/240/140';
  stock = signal(4);
  maxStock = 10;

  likes = signal(0);
  quantity = signal(1);

  like() {
    this.likes.update((l) => l + 1);
  }

  sell() {
    this.stock.update((s) => s - 1);
  }
}
