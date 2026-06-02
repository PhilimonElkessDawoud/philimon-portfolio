import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
})
export class Footer {
  private translate = inject(TranslateService);

  socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/philimonekladyous/', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/PhilimonElkessDawoud', label: 'GitHub' },
    { icon: 'far fa-file-pdf', url: '', label: 'CV', download: true },
  ];

  get cvUrl(): string {
    return this.translate.instant('home.cvLink');
  }
}