import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlackListService } from './black-list.service';


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

export function blackList(blackListService: BlackListService): AsyncValidatorFn {
  const validatorFn = function (control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value)
      .pipe(
        tap(v => console.log('start blacklisting')),
        switchMap(v => blackListService.isBlackListEmail(v)),
        map(v => {
          if (v) {
            return { blackList: v };
          }
          return null;
        }),
        tap(v => console.log('black list validation result', v))
      );
  };
  return validatorFn;
}


