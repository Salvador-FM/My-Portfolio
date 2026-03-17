// import { Injectable, inject, signal } from '@angular/core';
// import { WindowService } from './window-service';
// import { LocalStorageService } from './local-storage-service';
// import { TranslateService } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';

// export type Language = 'en' | 'es';

// @Injectable({
//   providedIn: 'root'
// })
// export class LanguageService {

//   private windowService = inject(WindowService);
//   private storage = inject(LocalStorageService);
//   private translate = inject(TranslateService);
//   private http = inject(HttpClient);

//   currentLanguage = signal<Language>('en');

//   initLanguage(): Language {
//     let lang = this.storage.getItem('language') as Language | null;
//     if (!lang) {
//       lang = this.getSystemLanguage();
//     }

//     this.currentLanguage.set(lang);
//     this.translate.setDefaultLang(lang);
//     this.translate.use(lang);
//     return lang;
//   }

//   setLanguage(lang: Language) {
//     this.storage.setItem('language', lang);
//     this.currentLanguage.set(lang);
//     this.translate.use(lang);
//   }

//   toggleLanguage() {
//     const next = this.currentLanguage() === 'es' ? 'en' : 'es';
//     this.setLanguage(next);
//   }

//   private getSystemLanguage(): Language {
//     const win = this.windowService.window;

//     if (!win) return 'en';

//     const userLang = win.navigator.language || 'en';
//     return userLang.startsWith('es') ? 'es' : 'en';
//   }
// }