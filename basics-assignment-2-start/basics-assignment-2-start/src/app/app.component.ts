import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';

  userNameEmpty: boolean = false;

  checkUserExists() {
    return this.username.length <= 0;
  }

  onButtonClick() {
    this.username = '';
  }
}
