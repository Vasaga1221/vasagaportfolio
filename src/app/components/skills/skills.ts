import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number; color: string }[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  activeCategory = signal('Frontend');

  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 95, color: '#dd0031' },
        { name: 'TypeScript', level: 92, color: '#3178c6' },
        { name: 'HTML5', level: 98, color: '#e34f26' },
        { name: 'CSS3 / SCSS', level: 95, color: '#264de4' },
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'RxJS', level: 85, color: '#b7178c' },
      ],
    },
    {
      category: 'Angular',
      icon: '⚡',
      skills: [
        { name: 'Signals & Computed', level: 92, color: '#6c63ff' },
        { name: 'Standalone Components', level: 95, color: '#00d2ff' },
        { name: 'Lazy Loading', level: 90, color: '#fd79a8' },
        { name: 'OnPush / Zoneless', level: 88, color: '#a29bfe' },
        { name: 'Angular CDK', level: 80, color: '#00b894' },
        { name: 'Angular CLI', level: 95, color: '#e17055' },
      ],
    },
    {
      category: 'CMS & SEO',
      icon: '🌐',
      skills: [
        { name: 'WordPress', level: 90, color: '#21759b' },
        { name: 'SEO Optimization', level: 85, color: '#00d2ff' },
        { name: 'Elementor', level: 88, color: '#92003b' },
        { name: 'REST APIs', level: 85, color: '#6c63ff' },
        { name: 'Performance', level: 88, color: '#00b894' },
        { name: 'Figma / Adobe XD', level: 80, color: '#f72585' },
      ],
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub', level: 90, color: '#f05032' },
        { name: 'VS Code', level: 95, color: '#007acc' },
        { name: 'Claude AI', level: 88, color: '#6c63ff' },
        { name: 'GitHub Copilot', level: 85, color: '#24292e' },
        { name: 'npm / Node.js', level: 82, color: '#339933' },
        { name: 'CI/CD Pipelines', level: 75, color: '#fc4a1a' },
      ],
    },
  ];

  get activeGroup(): SkillGroup {
    return this.skillGroups.find(g => g.category === this.activeCategory()) ?? this.skillGroups[0];
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
