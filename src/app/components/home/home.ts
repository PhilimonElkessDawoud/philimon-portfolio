import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private translate = inject(TranslateService);

  socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/philimonekladyous/', label: 'LinkedIn', download: false },
    { icon: 'fab fa-github', url: 'https://github.com/PhilimonElkessDawoud', label: 'GitHub', download: false },
    { icon: 'far fa-file-pdf', url: '', label: 'CV', download: true },
  ];

  get cvUrl(): string {
    return this.translate.instant('home.cvLink');
  }
}

//   stats = [
//     { value: '1+', label: 'Experiences' },
//     { value: '10+', label: 'Projects done' },
//     { value: '10+', label: 'Happy Clients' },
//   ];
// }
