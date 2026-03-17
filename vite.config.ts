import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['primeng', '@primeuix/themes']
  },
  optimizeDeps: {
    include: [
      '@angular/core',
      '@angular/common',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      'primeng/button',
      'primeng/card',
      'primeng/inputtext',
      '@primeuix/themes',
      'lucide-angular'
    ]
  },
  server: {
    middlewareMode: true
  }
});
