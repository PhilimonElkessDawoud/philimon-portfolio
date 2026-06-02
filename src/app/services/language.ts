import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = 'en';

  constructor(private translate: TranslateService) {

    const saved = localStorage.getItem('lang');
    if (saved) {
      this.currentLang = saved;
      this.translate.use(saved);
    }
  }

  toggle() {
    this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
    this.translate.use(this.currentLang);
    localStorage.setItem('lang', this.currentLang);
  }

  getCurrent(): string {
    return this.currentLang;
  }
}