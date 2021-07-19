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
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  loadApiDataAll()
  {
    this.registrationForm.setValue({
      userName: 'Bruce',
      password: 'Batman',
      confirmPassword: 'Batman',
      address:{
        city: 'Gotham',
        state: 'Arkham',
        postalCode: '1234'
      }
    })
  }

  loadApiDataSome()
  {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'Batman',
      confirmPassword: 'Batman',
      // address:{
      //   city: 'Gotham',
      //   state: 'Arkham',
      //   postalCode: '1234'
      // }
    })
  }
}
