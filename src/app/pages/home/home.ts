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
    { name: 'Angular', icon: '/Angular-icon.png' },
    { name: 'React', icon: '/React-icon.png' },
    { name: 'Vue', icon: '/Vue-icon.png' },
    { name: 'Next.js', icon: '/Nextjs-icon.png' },
    { name: 'Astro', icon: '/Astro-icon.png' },
  ];

  backendSkills = [
    { name: 'Node.js', icon: '/Nodejs-icon.png' },
    { name: 'Express.js', icon: '/Expressjs-icon.png' },
    { name: 'Spring Boot', icon: '/Spring-boot-icon.png' },
    { name: 'Laravel', icon: '/Laravel-icon.png' },
  ];

  databaseSkills = [
    { name: 'MySQL', icon: '/Mysql-icon.png' },
    { name: 'PostgreSQL', icon: '/Postgresql-icon.png' },
    { name: 'MongoDB', icon: '/Mongodb-icon.png' },
    { name: 'SQLite', icon: '/Sqlite-icon.png' },
    { name: 'Supabase', icon: '/Supabase-icon.png' },
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
