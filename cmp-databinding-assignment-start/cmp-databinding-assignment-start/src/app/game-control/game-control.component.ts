import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() startGame = new EventEmitter<{count: number}>();
  number: number = 0;
  reference: any

  onStart() {
    this.reference = setInterval(()=> {
      this.startGame.emit({count: this.number++})
    }, 1000);
  }

  onStop() {
    clearInterval(this.reference);
  }
}
