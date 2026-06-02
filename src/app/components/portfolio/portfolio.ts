import { Component, computed, signal, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService, Category, Project } from '../../services/portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [TranslateModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  private portfolioService = inject(PortfolioService);
  private translate = inject(TranslateService);

  categories: Category[] = [];
  projects: Project[] = [];
  activeCategory = signal<string>('all');

  constructor() {
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
    const category = this.categories.find(c => c.id === id);
    return category ? this.translate.instant(category.labelKey) : '';
  }

  getDelayClass(index: number): string {
    return 'delay-' + ((index + 1) * 100);
  }
}