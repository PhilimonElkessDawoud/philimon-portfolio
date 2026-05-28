import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'services', component: Services },
    { path: 'about', component: About },
    { path: 'portfolio', component: Portfolio },
    { path: 'contact', component: Contact },
];
