// import { Injectable, inject } from '@angular/core';
// import { TranslationService, Lang } from './translation-service';
// import { LocalStorageService } from './local-storage-service';

// @Injectable({
//   providedIn: 'root'
// })
// export class LanguageService {

//   private translation = inject(TranslationService);
//   private storage = inject(LocalStorageService);

//   async init() {
//     let lang = this.storage.getItem('lang') as Lang;

//     if (!lang) {
//       lang = this.getBrowserLang();
//       this.storage.setItem('lang', lang);
//     }

//     await this.translation.loadLang(lang);
//   }

//   async setLang(lang: Lang) {
//     this.storage.setItem('lang', lang);
//     await this.translation.loadLang(lang);
//   }

//   private getBrowserLang(): Lang {
//     const browserLang = navigator.language.split('-')[0];
//     return browserLang === 'es' ? 'es' : 'en';
//   }

// }

import { Injectable, inject } from '@angular/core';
import { TranslationService, Lang } from './translation-service';
import { LocalStorageService } from './local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private translation = inject(TranslationService);
  private storage = inject(LocalStorageService);

  async init() {
    let lang = this.storage.getItem('lang') as Lang;

    if (!lang) {
      lang = this.getBrowserLang();
      this.storage.setItem('lang', lang);
    }

    await this.translation.loadLang(lang);
  }

  async setLang(lang: Lang) {
    this.storage.setItem('lang', lang);
    await this.translation.loadLang(lang);
  }

  private getBrowserLang(): Lang {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  }

}