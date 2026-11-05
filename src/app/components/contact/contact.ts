import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitted = signal(false);
  loading = signal(false);

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mac.mani369vasaga@gmail.com',
      href: 'mailto:mac.mani369vasaga@gmail.com',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: null,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manivasagam',
      href: 'https://linkedin.com',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/manivasagam',
      href: 'https://github.com',
    },
  ];

  onSubmit() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.form = { name: '', email: '', subject: '', message: '' };
    }, 1500);
  }

  resetForm() {
    this.submitted.set(false);
  }
}
