import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  getServices(): Service[] {
    return [
      {
        id: 1,
        title: 'Frontend Development',
        description: 'Building responsive, pixel-perfect UIs using Angular with smooth animations and full cross-browser compatibility.',
        icon: 'frontend',
      },
      {
        id: 2,
        title: 'Backend Development',
        description: 'Designing scalable REST APIs using .NET and Spring Boot with clean architecture and end-to-end testing.',
        icon: 'backend',
      },
      {
        id: 3,
        title: 'Database Design',
        description: 'Structuring efficient relational databases (PostgreSQL, MySQL) and NoSQL (MongoDB) with optimized queries and indexing strategies.',
        icon: 'database',
      },
      {
        id: 4,
        title: 'Full Stack Web Apps',
        description: 'End-to-end development from UI to server — delivering complete, production-ready web applications built to scale.',
        icon: 'fullstack',
      },
      {
        id: 5,
        title: 'Clean Code & Architecture',
        description: 'Writing maintainable, SOLID-principled code with proper separation of concerns, meaningful naming, and thorough documentation.',
        icon: 'cleancode',
      },
    ];
  }
}