import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Service, ServicesService } from '../../services/services';

@Component({
  selector: 'app-services',
  imports: [TranslateModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services: Service[] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.services = this.servicesService.getServices();
  }

  getDelayClass(id: number): string {
    return `delay-${id * 100}`;
  }
}