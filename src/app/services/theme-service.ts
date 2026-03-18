import { Injectable, inject, signal } from '@angular/core';
import { WindowService } from './window-service';
import { LocalStorageService } from './local-storage-service';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private windowService = inject(WindowService);
  private storage = inject(LocalStorageService);

  currentTheme = signal<Theme>('light');

  initTheme(): Theme {
    let theme = this.storage.getItem('theme') as Theme | null;
    if (!theme) {
      theme = this.getSystemTheme();
    }
    
    this.currentTheme.set(theme); // Sincronizamos el signal
    this.applyTheme(theme);
    return theme;
  }

  setTheme(theme: Theme) {
    this.storage.setItem('theme', theme);
    this.currentTheme.set(theme); // Actualizamos el signal
    this.applyTheme(theme);
  }

  toggleTheme() {
    const next = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  private getSystemTheme(): Theme {

    const win = this.windowService.window;

    if (!win) return 'light';

    const prefersDark = win.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme) {
    const win = this.windowService.window;
    if (!win) return;

    const html = win.document.documentElement;

    if (theme === 'dark') {
      html.classList.add('dark'); // Esto activa Tailwind y PrimeNG
    } else {
      html.classList.remove('dark');
    }

    this.storage.setItem('theme', theme); // Persistimos la elección

    // Opcional: Mantener el atributo si quieres usarlo para otros estilos CSS puros
    html.setAttribute('data-theme', theme);
  }

}