import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';

  //within the FormGroup, there are FormControl fields
  registrationForm = new FormGroup({
    userName: new FormControl('Kratos'),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
}
