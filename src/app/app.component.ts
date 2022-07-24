import { Component } from '@angular/core';
import { OnDemandLoadService } from './services/on-demand-load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMenuOpen = false;

  constructor(private load: OnDemandLoadService) {}

  loadDynamicModule() {
    const moduleName = prompt('Which module should I load?');
    if (moduleName) {
      this.load.startPreload(moduleName);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
