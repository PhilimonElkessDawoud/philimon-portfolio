import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/philimonekladyous/', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/PhilimonElkessDawoud', label: 'GitHub' },
    { icon: 'far fa-file-pdf', url: '/your-cv.pdf', label: 'CV', download: true },
  ];

  stats = [
    { value: '1+', label: 'Experiences' },
    { value: '10+', label: 'Projects done' },
    { value: '10+', label: 'Happy Clients' },
  ];
}
