import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  title = 'My Angular';

  onButtonClicked() {
    alert('Click');
  }

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }
}
