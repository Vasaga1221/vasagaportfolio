import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  color: string;
  current: boolean;
  achievements: string[];
  tech: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      role: 'Software Developer',
      company: 'D-Tools Inc.',
      period: 'Jul 2025 – Present',
      duration: '1 yr',
      location: 'Chennai, Tamil Nadu · On-site',
      type: 'Full-time',
      logo: 'D',
      color: '#6c63ff',
      current: true,
      achievements: [
        'Developed scalable web applications using Angular with Signals, standalone components, and optimized component architecture',
        'Designed, developed, and deployed the Global Calendar — a major feature to manage and track application events',
        'Leveraged AI-assisted tools (Claude, GitHub Copilot, CodeAnt AI) to improve development speed and code quality',
        'Optimized UI components for performance, responsiveness, and improved user experience across all devices',
        'Implemented MCP (Model Context Protocol) servers to enhance AI-assisted development workflows',
      ],
      tech: ['Angular', 'TypeScript', 'Angular Signals', 'Zoneless', 'MCP Servers', 'Claude AI'],
    },
    {
      role: 'Web Developer',
      company: 'CANiT Solutions',
      period: 'Oct 2021 – Jul 2025',
      duration: '3 yrs 10 mos',
      location: 'Chennai, Tamil Nadu',
      type: 'Full-time',
      logo: 'C',
      color: '#00d2ff',
      current: false,
      achievements: [
        'Converted PSD files to HTML and extracted designs from Adobe XD and Figma for seamless web development',
        'Created web applications using HTML5, CSS4, JavaScript, SCSS, and SASS',
        'Integrated and customized WordPress plugins to enhance website functionality and meet client needs',
        'Implemented RESTful APIs for dynamic content loading and third-party API integrations',
        'Designed and developed high-converting landing pages to generate leads and improve user engagement',
      ],
      tech: ['HTML5', 'SCSS/SASS', 'JavaScript', 'TypeScript', 'Angular', 'WordPress', 'REST APIs'],
    },
    {
      role: 'Web Designer',
      company: 'Zauca',
      period: 'Jan 2019 – Feb 2020',
      duration: '1 yr 2 mos',
      location: 'Trichy · On-site',
      type: 'Full-time',
      logo: 'Z',
      color: '#fd79a8',
      current: false,
      achievements: [
        'Explored and selected both premium and free themes based on project needs',
        'Worked extensively with Elementor to create visually appealing and user-friendly pages',
        'Enhanced designs by experimenting with typography, color schemes, and layout adjustments',
        'Gained proficiency in using custom CSS to refine website aesthetics',
      ],
      tech: ['WordPress', 'Elementor', 'CSS3', 'HTML5', 'Frontend Design'],
    },
  ];
}
