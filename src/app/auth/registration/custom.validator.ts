import { AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';


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
      control.setErrors({ valuesMismatch: value });
      return { valuesMismatch: value };
    } else if (control.hasError('valuesMismatch')) {
      control.updateValueAndValidity();
    }
    return null;
  };
  return validatorFn;
}

export function blackList(emails: string[]): AsyncValidatorFn {
  const validatorFn = function (control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value)
      .pipe(
        tap(v => console.log('start blacklisting')),
        delay(3000),
        map(v => {
          if (emails.includes(v)) {
            return { blackList: v };
          }
          return null;
        })
      );
  };
  return validatorFn;
}


