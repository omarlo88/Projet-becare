import {AbstractControl} from '@angular/forms';


export function myPassValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const confirmedPasswordValue = control.value;
    const passControl = control.root.get('password'); // magic is this
    if (passControl) {
      const passValue = passControl.value;
      if (passValue !== confirmedPasswordValue || passValue === '') {
        return {
          isError: true
        };
      }
    }
  }

  return null;
}


export function zipcodeValidator(control: AbstractControl) {

  if (control && (control.value !== null || control.value !== undefined)) {
    const regex = new RegExp('^[0-9]{6}$');

    if (!regex.test(control.value)) {
      return {
        isError: true
      };
    }
  }

  return null;
}

