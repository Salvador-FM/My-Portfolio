import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    this.isSubmitting = true;

    // Aquí iría la lógica real de envío (EmailJS, Formspree, backend propio, etc.)
    console.log('Formulario enviado:', this.formData);

    // Simulación de envío
    setTimeout(() => {
      alert('¡Mensaje enviado correctamente! Gracias por contactarme. 😊');
      
      // Resetear formulario
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.isSubmitting = false;
    }, 1800);
  }

}
