import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  leftCrap = '../assets/img/dice1.png';
  rightCrap = '../assets/img/dice2.png';

  play1: number = 0;
  play2: number = 0;

  public handlePLay() {
    this.play1 = Math.floor(Math.random() * 6) + 1;
    this.play2 = Math.floor(Math.random() * 6) + 1;
    this.leftCrap = '../assets/img/dice' + this.play1 + '.png';
    this.rightCrap = '../assets/img/dice' + this.play2 + '.png';
  }

}
