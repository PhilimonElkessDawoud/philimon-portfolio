import { Injectable } from '@angular/core';

export interface Category {
  id: string;
  labelKey: string;
}

export interface Project {
  id: number;
  key: string;
  category: string;
  github: string;
  live: string | null;
  image: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {

  private categories: Category[] = [
    { id: 'all', labelKey: 'portfolio.categories.all' },
    { id: 'backend', labelKey: 'portfolio.categories.backend' },
    { id: 'frontend', labelKey: 'portfolio.categories.frontend' },
    { id: 'fullstack', labelKey: 'portfolio.categories.fullstack' },
  ];

  private projects: Project[] = [
    {
      id: 1,
      key: 'shipmentTracker',
      category: 'fullstack',
      github: 'https://github.com/PhilimonElkessDawoud/Shipment-Tracker',
      live: 'https://shipment-tracker-self.vercel.app/',
      image: 'projects/Shipment_Tracker.png',
    },
    {
      id: 2,
      key: 'taskManager',
      category: 'frontend',
      github: 'https://github.com/PhilimonElkessDawoud/task-manager',
      live: 'https://task-manager-peach-beta-37.vercel.app/',
      image: 'projects/Task_Manager.png',
    },
    {
      id: 3,
      key: 'patientManagement',
      category: 'backend',
      github: 'https://github.com/PhilimonElkessDawoud/Patient-Management-System',
      live: null,
      image: 'projects/Patient_Management_System.png',
    },
    {
      id: 4,
      key: 'libraryManagement',
      category: 'backend',
      github: 'https://github.com/PhilimonElkessDawoud/BookWise',
      live: null,
      image: 'projects/Library_Management_System.png',
    },
    {
      id: 5,
      key: 'onlineMarketplace',
      category: 'backend',
      github: 'https://github.com/PhilimonElkessDawoud/Online_Marketplace--Django',
      live: null,
      image: 'projects/Online_Marketplace.png',
    },
    {
      id: 6,
      key: 'clothingStore',
      category: 'fullstack',
      github: 'https://github.com/PhilimonElkessDawoud/ecommerce-full-stack-project',
      live: null,
      image: 'projects/Online_Clothing_Store.png',
    },
  ];

  getCategories(): Category[] { return this.categories; }
  getProjects(): Project[] { return this.projects; }
}