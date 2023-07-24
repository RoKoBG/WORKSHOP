import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
interface Profile {
  username: string;
  email: string;
  tel: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: Profile ={
    username: 'Rosen', email: 'rosen.koichev@gmail.com', tel: '+359 894433550'
  };

  form = this.fb.group({
    username: ['test', [Validators.required, Validators.minLength(5)]],
    email: [
      'test',
      [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)],
    ],
    tel: ['test'],
  });

  constructor(private fb: FormBuilder) {}

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }
  saveProfile(): void {
    if (this.form.invalid) {
      return;
    }
    this.profileDetails = { ...this.form.value } as Profile;
    this.toggleEditMode();
  }
}
