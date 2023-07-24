import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPassValidator(pass: string, repass: string): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const password = group.get(pass);
    const rePassword = group.get(repass);
    return password?.value === rePassword?.value
      ? null
      : { matchPassValidator: true };
  };
}
