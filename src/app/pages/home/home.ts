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

  frontendSkills = [
    { name: 'Angular', icon: '/angular-icon.png' },
    { name: 'React', icon: '/react-icon.png' },
    { name: 'Vue', icon: '/vue-icon.png' },
    { name: 'Next.js', icon: '/nextjs-icon.png' },
    { name: 'Astro', icon: '/astro-icon.png' },
  ];

  backendSkills = [
    { name: 'Node.js', icon: '/nodejs-icon.png' },
    { name: 'Express.js', icon: '/expressjs-icon.png' },
    { name: 'Spring Boot', icon: '/spring-boot-icon.png' },
    { name: 'Laravel', icon: '/laravel-icon.png' },
  ];

  databaseSkills = [
    { name: 'MySQL', icon: '/mysql-icon.png' },
    { name: 'PostgreSQL', icon: '/postgresql-icon.png' },
    { name: 'MongoDB', icon: '/mongodb-icon.png' },
    { name: 'SQLite', icon: '/sqlite-icon.png' },
    { name: 'Supabase', icon: '/supabase-icon.png' },
  ];

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
