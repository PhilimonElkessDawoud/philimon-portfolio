import { Injectable } from '@angular/core';

export interface Category {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  github: string;
  live: string | null;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {

  private categories: Category[] = [
    { id: 'all', label: 'All' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  private projects: Project[] = [
    {
      id: 1,
      title: 'Project',
      category: 'react',
      github: 'https://github.com/',
      live: '',
      image: 'assets/',
      description: 'Project desciption.',
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProjects(): Project[] {
    return this.projects;
  }
}