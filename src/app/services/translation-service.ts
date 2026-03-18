import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private currentLang = signal<Lang>('es');
  private translations = signal<any>({});

  async loadLang(lang: Lang) {

    let data;

    if (lang === 'es') {
      data = await import('../../assets/i18n/es.json');
    } else {
      data = await import('../../assets/i18n/en.json');
    }

    this.currentLang.set(lang);
    this.translations.set(data.default);
  }

  t(path: string): string {
    return path.split('.').reduce((obj, key) => obj?.[key], this.translations()) || path;
  }

  get lang() {
    return this.currentLang();
  }

}