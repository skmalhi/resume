import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '@app/core/services/app.service';
import { Subscription } from 'rxjs';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: Subscription;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this._initSignupForm();
  }

  private _initSignupForm(): void {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    AppService.markAsDirty(this.contactForm);

    if (this.contactForm.valid) {
      let sendEmail = this.contactForm.value;
      sendEmail = AppService.cloneObject(this.contactForm.value);

      // if (signup.email.indexOf("@inboxresearch.com") >= 0) {
      //   this.passwordConfirmationPopup = this.popupService.openWithComponent(PasswordConfirmationPopupComponent, {});
      //   this.passwordConfirmationPopup.eventEmitter.subscribe((password) => {
      //     signup.passwordForSkipEmailValidation = password;
      //     this._submitSignupRequest(signup);
      //   });
      // } else {
      //   this._submitSignupRequest(signup);
      // }
    }
  }
}
