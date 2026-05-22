import { Component, OnInit } from '@angular/core';
import { Service, ServicesService } from '../../services/services';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services: Service[] = [];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.services = this.servicesService.getServices();
  }

  getDelayClass(index: number): string {
    return `delay-${(index + 1) * 100}`;
  }
}
