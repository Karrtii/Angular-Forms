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
  topicHasError = true;

  userModel = new User('Kratos', 'kratos@test.com', 1234567890, 'default', 'morning', true);

  validateTopic(value: any)
  {
    if(value == 'default')
    {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit()
  {
    console.log(this.userModel);
  }
}
