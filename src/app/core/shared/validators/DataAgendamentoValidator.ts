import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isDiaPassado(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(control.value);
  
      return selectedDate >= today ? null : { dateNotValid: true };
    };
  }