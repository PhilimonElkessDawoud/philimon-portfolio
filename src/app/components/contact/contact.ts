import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private fb = inject(FormBuilder);

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    service: ['', Validators.required],
    timeline: ['', Validators.required],
    details: ['', [Validators.required, Validators.minLength(10)]],
  });

  // Shorthand getters for cleaner template access
  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get phone() { return this.form.get('phone')!; }
  get service() { return this.form.get('service')!; }
  get timeline() { return this.form.get('timeline')!; }
  get details() { return this.form.get('details')!; }

  isInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const data = this.form.value;

    try {
      await emailjs.send(
        environment.emailjsServiceId,
        environment.emailjsTemplateId,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          timeline: data.timeline,
          title: data.service,
          message: `
            Name:     ${data.name}
            Email:    ${data.email}
            Phone:    ${data.phone}
            Service:  ${data.service}
            Timeline: ${data.timeline}

            Details:
            ${data.details}
          `.trim(),
        },
        environment.emailjsPublicKey
      );
      this.submitSuccess = true;
      this.form.reset();
    } catch (error) {
      this.submitError = true;
      console.error('EmailJS Error:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
