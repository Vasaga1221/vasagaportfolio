import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  category: string;
  color: string;
  icon: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  activeFilter = signal('All');
  filters = ['All', 'Angular', 'WordPress', 'Full-Stack'];

  projects: Project[] = [
    {
      title: 'Global Calendar System',
      desc: 'Enterprise event management system at D-Tools Inc.',
      longDesc: 'A major feature to manage and track application events globally, built with Angular Signals, zoneless change detection, and real-time updates.',
      tags: ['Angular', 'Signals', 'Zoneless', 'TypeScript', 'RxJS'],
      category: 'Angular',
      color: '#6c63ff',
      icon: '📅',
      featured: true,
      metrics: [
        { label: 'Change Detection', value: 'Zoneless' },
        { label: 'Architecture', value: 'Standalone' },
        { label: 'Performance', value: 'OnPush' },
      ],
    },
    {
      title: 'AI Dev Workflow Setup',
      desc: 'MCP server integration for AI-assisted development',
      longDesc: 'Structured communication between AI tools and development environments using Model Context Protocol servers for improved automation and intelligent code assistance.',
      tags: ['MCP Servers', 'Claude AI', 'GitHub Copilot', 'Angular'],
      category: 'Full-Stack',
      color: '#00d2ff',
      icon: '🤖',
      featured: true,
      metrics: [
        { label: 'Dev Speed', value: '+40%' },
        { label: 'AI Tools', value: '3 Integrated' },
        { label: 'Automation', value: 'Full CI/CD' },
      ],
    },
    {
      title: 'E-Commerce Web Application',
      desc: 'Full-stack web app with RESTful API integration',
      longDesc: 'Scalable e-commerce platform with Angular frontend, REST API data loading, third-party payment gateway integrations and social media APIs.',
      tags: ['Angular', 'REST API', 'TypeScript', 'SCSS'],
      category: 'Full-Stack',
      color: '#fd79a8',
      icon: '🛒',
      featured: false,
      metrics: [
        { label: 'Load Time', value: '<2s' },
        { label: 'APIs', value: '5+ Integrated' },
        { label: 'Responsive', value: 'All Devices' },
      ],
    },
    {
      title: 'Corporate WordPress Site',
      desc: 'High-performance business website with SEO',
      longDesc: 'Converted PSD/Figma designs to pixel-perfect WordPress themes with custom plugins, SEO optimization, and cross-browser compatibility.',
      tags: ['WordPress', 'SEO', 'PHP', 'JavaScript', 'Elementor'],
      category: 'WordPress',
      color: '#00b894',
      icon: '🌐',
      featured: false,
      metrics: [
        { label: 'Lighthouse', value: '95+' },
        { label: 'SEO Score', value: '98/100' },
        { label: 'Load Time', value: '1.2s' },
      ],
    },
    {
      title: 'Angular Component Library',
      desc: 'Reusable UI component library with signals',
      longDesc: 'A modular Angular component library following clean architecture principles with smart/dumb component patterns, full accessibility, and theme support.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Storybook'],
      category: 'Angular',
      color: '#a29bfe',
      icon: '📦',
      featured: false,
      metrics: [
        { label: 'Components', value: '50+' },
        { label: 'Accessibility', value: 'WCAG 2.1' },
        { label: 'Bundle Size', value: 'Tree-shaken' },
      ],
    },
    {
      title: 'Lead Generation Landing Pages',
      desc: 'High-converting landing pages for client campaigns',
      longDesc: 'Designed and developed landing pages using HTML5, CSS3, and WordPress to generate leads, improve user engagement, and enhance conversion rates.',
      tags: ['HTML5', 'CSS3', 'WordPress', 'SEO', 'Analytics'],
      category: 'WordPress',
      color: '#e17055',
      icon: '📈',
      featured: false,
      metrics: [
        { label: 'Conversion', value: '+35%' },
        { label: 'Mobile Score', value: '100' },
        { label: 'Bounce Rate', value: '-20%' },
      ],
    },
  ];

  get filteredProjects(): Project[] {
    const f = this.activeFilter();
    return f === 'All' ? this.projects : this.projects.filter(p => p.category === f);
  }

  setFilter(f: string) {
    this.activeFilter.set(f);
  }
}
