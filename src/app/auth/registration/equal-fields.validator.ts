import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function equalFields(controlName: string, checkWithControlName: string): ValidatorFn {
  const validatorFn = function (parentControl: AbstractControl): ValidationErrors | null {
    const checkWithControl = parentControl.get(checkWithControlName);
    const checkWithValue = checkWithControl.value;
    /*if (checkWithControl.invalid) {
      return null;
    }*/
    const control = parentControl.get(controlName);
    const value = control.value;
    if (checkWithValue !== value) {
      control.setErrors({valuesMismatch: value});
      return {valuesMismatch: value};
    } else if (control.hasError('valuesMismatch')) {
      control.updateValueAndValidity();
    }
    return null;
  };
  return validatorFn;
}


