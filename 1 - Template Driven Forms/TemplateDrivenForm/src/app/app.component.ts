import { Component } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';

  topics = ['Angular', 'Android', 'Atmel'];

  userModel = new User('Kratos', 'kratos@test.com', 123456789, '', 'morning', true);
}
