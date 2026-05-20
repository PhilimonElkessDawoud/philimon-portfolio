import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = false;

  navLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Services', path: '/services' },
    { id: 3, name: 'About me', path: '/about' },
    { id: 4, name: 'Portfolio', path: '/portfolio' },
    { id: 5, name: 'Feedback', path: '/feedback' },
    { id: 6, name: 'Contact me', path: '/contact' },
  ];

  constructor(private router: Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}