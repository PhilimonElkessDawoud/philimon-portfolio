import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = false;
  private languageService = inject(LanguageService);

  navLinks = [
    { id: 1, key: 'home', path: '/' },
    { id: 2, key: 'services', path: '/services' },
    { id: 3, key: 'about', path: '/about' },
    { id: 4, key: 'portfolio', path: '/portfolio' },
    { id: 6, key: 'contact', path: '/contact' },
  ];

  get currentLang() {
    return this.languageService.getCurrent();
  }

  toggleLanguage() {
    this.languageService.toggle();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}