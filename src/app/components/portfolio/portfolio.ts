import { Component, computed, signal } from '@angular/core';
import { PortfolioService, Category, Project } from '../../services/portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  categories: Category[] = [];
  projects: Project[] = [];

  activeCategory = signal<string>('all');

  constructor(private portfolioService: PortfolioService) {
    this.categories = this.portfolioService.getCategories();
    this.projects = this.portfolioService.getProjects();
  }

  filteredProjects = computed(() => {
    const category = this.activeCategory();

    if (category === 'all') return this.projects;

    return this.projects.filter(p => p.category === category);
  });

  setCategory(categoryId: string) {
    this.activeCategory.set(categoryId);
  }

  openLive(link: string | null) {
    if (link) window.open(link, '_blank');
  }

  openGithub(event: Event, link: string) {
    event.stopPropagation();
    window.open(link, '_blank');
  }

  getCategoryLabel(id: string): string {
    return this.categories.find(c => c.id === id)?.label || '';
  }

  getDelayClass(index: number): string {
    return 'delay-' + ((index + 1) * 100);
  }
}