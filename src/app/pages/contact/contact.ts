import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async onSubmit(e: Event) {
    e.preventDefault();

    // Evitamos ejecutar EmailJS en el servidor (SSR)
    if (!this.isBrowser) return;

    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      // Import dinámico (solo se carga en el navegador)
      const emailjs = await import('@emailjs/browser');

      // Inicializamos EmailJS con la publicKey del environment
      emailjs.default.init({
        publicKey: environment.emailjs.publicKey,
      });

      // Enviamos el formulario
      const response = await emailjs.default.sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        e.target as HTMLFormElement
      );

      console.log('EmailJS SUCCESS!', response.status, response.text);

      this.successMessage = '¡Mensaje enviado correctamente! Gracias por contactarme. 😊';

      // Resetear formulario
      this.formData = { name: '', email: '', subject: '', message: '' };
      (e.target as HTMLFormElement).reset();

    } catch (error: any) {
      console.error('EmailJS FAILED...', error);
      this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor intenta más tarde.';
    } finally {
      this.isSubmitting = false;
    }
  }

}
