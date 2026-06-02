import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Home, Services, About, Portfolio, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('philimon-portfolio');
}
