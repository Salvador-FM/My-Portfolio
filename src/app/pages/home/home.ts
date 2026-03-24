import { Component, inject, AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundWave } from '../../shared/background-wave/background-wave';
import { TranslationService } from '../../services/translation-service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [
    BackgroundWave,
    CardModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  private translation = inject(TranslationService);

  t = (key: string) => {
    return this.translation.t(key) || '';
  };

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  }

}
