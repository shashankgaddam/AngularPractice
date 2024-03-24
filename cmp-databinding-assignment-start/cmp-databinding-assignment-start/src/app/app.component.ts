import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNums: number[] = [];
  evenNums: number[] = [];

  onStartGame(gameData: {count: number}) {
    if (gameData.count %2 == 0) {
      this.evenNums.push(gameData.count);
    } else {
      this.oddNums.push(gameData.count);
    }
  }
}
