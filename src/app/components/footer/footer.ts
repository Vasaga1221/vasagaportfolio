import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
