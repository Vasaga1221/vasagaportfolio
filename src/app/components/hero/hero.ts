import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  private roles = [
    'Angular Developer',
    'Frontend Engineer',
    'UI/UX Enthusiast',
    'WordPress Expert',
    'SEO Specialist',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 2 + Math.random() * 4,
  }));

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private typeWriter() {
    const current = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.displayText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.displayText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let delay = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 400;
    }

    this.timer = setTimeout(() => this.typeWriter(), delay);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
