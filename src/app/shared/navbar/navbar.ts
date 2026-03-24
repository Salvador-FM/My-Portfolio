import { NgOptimizedImage } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { LucideAngularModule, SunMoonIcon } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../../services/language-service';
import { TranslationService } from '../../services/translation-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, LucideAngularModule, ButtonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Navbar {

  readonly SunMoonIcon = SunMoonIcon;

  private langService = inject(LanguageService);
  private translation = inject(TranslationService);

  t = (key: string) => {
    return this.translation.t(key) || '';
  };

  isMenuOpen = signal(false);
  isDarkMode = signal<boolean>(false);
  nextLang = () => this.translation.lang === 'es' ? 'EN' : 'ES';

  constructor(private themeService: ThemeService) {
    // initialise theme via service (handles storage & application)
    const initial = this.themeService.initTheme();
    this.isDarkMode.set(initial === 'dark');
    // set initial language
    // const lang = this.translation.lang;
    // this.currentLang.set(lang.toUpperCase());
  }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  toggleMode() {
    // flip theme via service; it also persists & updates document
    this.themeService.toggleTheme();
    // keep the signal in sync for UI binding
    this.isDarkMode.update(mode => !mode);
  }

  toggleLanguage() {
    const next = this.translation.lang === 'es' ? 'en' : 'es';
    this.langService.setLang(next);
    // this.currentLang.set(next.toUpperCase());
  }
}
