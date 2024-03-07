import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showText: boolean = false;
  buttonClicks: number[] = [];
  counter: number = 0;

  onDisplayDetails() {
    this.counter++;
    this.buttonClicks.push(this.counter);
    this.showText = !this.showText;
  }

  getStyle(num: number) {
    return num >= 5 ? 'blue' : 'transparent';
  }
}
