import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'services', component: Services },
];
