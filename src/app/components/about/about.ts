import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  highlights = [
    { icon: '⚡', label: 'Angular Expert', desc: 'Signals, Zoneless, Standalone' },
    { icon: '🤖', label: 'AI-Assisted Dev', desc: 'Claude, GitHub Copilot, CodeAnt' },
    { icon: '🎯', label: 'Performance First', desc: 'OnPush, Virtual Scroll, Lazy' },
    { icon: '🌐', label: 'Full-Stack Ready', desc: 'WordPress, REST APIs, SEO' },
  ];

  techStack = [
    'Angular 18+', 'TypeScript', 'RxJS', 'Angular Signals',
    'SCSS/Sass', 'HTML5', 'JavaScript ES2024', 'WordPress',
    'REST APIs', 'Git/GitHub', 'Figma', 'Adobe XD',
  ];
}
