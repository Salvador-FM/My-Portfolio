import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['primeng', '@primeuix/themes']
  },
  optimizeDeps: {
    include: [
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      'primeng',
      '@primeuix/themes',
      'lucide-angular'
    ]
  },
  server: {
    middlewareMode: true
  }
});
