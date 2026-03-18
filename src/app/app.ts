import { Component, signal, OnInit, inject } from '@angular/core';
import { ThemeService } from './services/theme-service';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('my-page');
  private langService = inject(LanguageService);
  private themeService = inject(ThemeService);

  async ngOnInit() {
    await this.langService.init();
    this.themeService.initTheme();
  }
}
