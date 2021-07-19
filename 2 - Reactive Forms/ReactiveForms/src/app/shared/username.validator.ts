import {AbstractControl, ValidatorFn} from "@angular/forms";

//factory function
export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn
{
  return (control: AbstractControl): {[key: string]: any} | null =>
  {
    const forbidden = forbiddenName.test(control.value); // if it's admin, then the flag is set to true. else, false.
    return forbidden ? {'forbiddenName': {value: control.value}} : null; //same this as below

    // if(forbidden == true)
    // {
    //   return {'forbiddenName': {value: control.value}};
    // }
    // else
    // {
    //   return null;
    // }
  }
}


// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null // if validation fails, then it returns a string key. if it passes, then it doesnt return anything
// {
//   const forbidden = /admin/.test(control.value); // if it's admin, then the flag is set to true. else, false.
//   return forbidden ? {'forbiddenName': {value: control.value}} : null; //same this as below
//
//   // if(forbidden == true)
//   // {
//   //   return {'forbiddenName': {value: control.value}};
//   // }
//   // else
//   // {
//   //   return null;
//   // }
// }

