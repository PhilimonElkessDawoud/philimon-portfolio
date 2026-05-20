import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  navLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Services', path: '/services' },
    { id: 3, name: 'About me', path: '/about' },
    { id: 4, name: 'Portfolio', path: '/portfolio' },
    { id: 5, name: 'Feedback', path: '/feedback' },
    { id: 6, name: 'Contact me', path: '/contact' },
  ];

  socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/philimonekladyous/', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/PhilimonElkessDawoud', label: 'GitHub' },
    { icon: 'far fa-file-pdf', url: '/your-cv.pdf', label: 'CV' },
  ];
}