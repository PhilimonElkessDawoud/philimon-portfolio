import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Home } from './components/home/home';
import { Services } from './components/services/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Home, Services],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('philimon-portfolio');
}
