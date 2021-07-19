import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "./shared/username.validator";
import {passwordValidator} from "./shared/password.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForms';

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]], // for the forbiddenNameValidator, any string we want to be forbid can be added to the parameter
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, {validators: passwordValidator})
  }

  ngOnInit() {
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email');
      if(checkedValue)
      {
        email!.setValidators(Validators.required);
      }
      else
      {
        email?.clearValidators()
      }
      email?.updateValueAndValidity();
    })
  }

  get getUserName()
  {
    return this.registrationForm.get('userName');
  }

  get getEmail()
  {
    return this.registrationForm.get('email');
  }

  //within the FormGroup, there are FormControl fields
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Kratos'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

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
