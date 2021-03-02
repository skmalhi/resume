import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from '@app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  loading: Subscription;

  constructor(private fb: FormBuilder, private contact: ContactService) {}

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
    // AppService.markAsDirty(this.contactForm);

    // if (this.contactForm.valid) {
      let emailData = this.contactForm.value;
      // sendEmail = AppService.cloneObject(this.contactForm.value);

      console.log(emailData);
      this.contact.sendEmail(emailData).subscribe(
        (response) => {
          location.href = 'https://mailthis.to/confirm';
          console.log(response);
        },
        (error) => {
          console.warn(error.responseText);
          console.log({ error });
        }
      );
    // }
  }
}
