import { Component, inject } from '@angular/core';
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
export class Home {

  private translation = inject(TranslationService);

  t = (key: string) => this.translation.t(key);

}
