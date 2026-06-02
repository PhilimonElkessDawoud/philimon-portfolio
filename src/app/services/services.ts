import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  key: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  getServices(): Service[] {
    return [
      { id: 1, key: 'frontend', icon: 'frontend' },
      { id: 2, key: 'backend', icon: 'backend' },
      { id: 3, key: 'database', icon: 'database' },
      { id: 4, key: 'fullstack', icon: 'fullstack' },
      { id: 5, key: 'cleancode', icon: 'cleancode' },
    ];
  }
}