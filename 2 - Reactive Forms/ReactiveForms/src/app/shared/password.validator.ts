import {AbstractControl} from "@angular/forms";

export function passwordValidator(control: AbstractControl): {[key: string]: boolean} | null
{
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if(password?.pristine || confirmPassword?.pristine) // so that the confirmPassword field will only complain when it is touched
  {
    return null;
  }

  return password && confirmPassword && password.value != confirmPassword.value ? {'misMatch': true} : null; // if password and confirmPassword are not blank, and password.value and confirmPassword.value are not equal, then return a misMatch error. else, return null.
}
