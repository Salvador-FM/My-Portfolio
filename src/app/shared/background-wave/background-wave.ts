import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
  inject,
  signal,
  effect,
  Injector,
  runInInjectionContext
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-background-wave',
  imports: [],
  templateUrl: './background-wave.html',
  styleUrl: './background-wave.css',
})

export class BackgroundWave {

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private platformId = inject(PLATFORM_ID);

  private themeService = inject(ThemeService);

  bgColor = signal<string>('');

  neonColor = signal<string>('');

  private readonly themeEffect = runInInjectionContext(inject(Injector), () =>
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const theme = this.themeService.currentTheme();
      const bgVar = theme === 'dark' ? '--bg-color' : '--color-test';
      const neonVar = theme === 'dark' ? '--neon-green' : '--dim-green';

      this.bgColor.set(getComputedStyle(document.documentElement).getPropertyValue(bgVar));
      this.neonColor.set(getComputedStyle(document.documentElement).getPropertyValue(neonVar));
    })
  );

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const rows = 80;
    const cols = 120;
    const spacing = 24;
    const perspective = 0.00025;
    const waveHeight = 28;
    let time = 0;

    const horizon = canvas.height * 0.35; // hasta donde llegan las olas

    const animate = () => {
      ctx.fillStyle = this.bgColor();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let z = 0; z < rows; z++) {
        const depth = z * spacing;
        const scale = 1 / (1 + depth * perspective);

        for (let x = -cols / 2; x < cols / 2; x++) {
          const wave =
            Math.sin((x * 0.5 + time) * 0.08 + z * 0.25) * waveHeight;

          const px = canvas.width / 2 + x * spacing * scale;
          const py = canvas.height - depth * scale - wave * scale;

          // ⬇ Fade vertical (desaparición suave)
          const fade =
            (py - horizon) / (canvas.height - horizon);

          if (fade <= 0) continue;

          ctx.globalAlpha = Math.min(fade, 1);

          ctx.beginPath();
          ctx.arc(px, py, 1.5 * scale, 0, Math.PI * 2);
          ctx.fillStyle = this.neonColor();
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      time += 0.2;
      requestAnimationFrame(animate);
    };

    animate();
  }

}
