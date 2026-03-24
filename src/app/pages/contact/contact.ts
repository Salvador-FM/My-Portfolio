import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../../environment/environment';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor() {
    // Inicializamos EmailJS con la clave del environment
    emailjs.init({
      publicKey: environment.emailjs.publicKey,
    });
  }

  async onSubmit(e: Event) {
    e.preventDefault();

    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const response: EmailJSResponseStatus = await emailjs.sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        e.target as HTMLFormElement
      );

      console.log('SUCCESS!', response.status, response.text);
      
      this.successMessage = '¡Mensaje enviado correctamente! Gracias por contactarme. 😊';

      // Resetear formulario
      this.formData = { name: '', email: '', subject: '', message: '' };
      (e.target as HTMLFormElement).reset();

    } catch (error: any) {
      console.error('FAILED...', error);
      this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor intenta más tarde.';
    } finally {
      this.isSubmitting = false;
    }
  }

}
