import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkTheme = false;
  constructor(private localStorageService: LocalStorageService) {
    this.loadThemePreference();
  }

  private loadThemePreference(): void {
    const savedTheme = this.localStorageService.getTheme();

    if (savedTheme) {
      this.darkTheme = savedTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkTheme = prefersDark;
    }

    this.applyTheme();
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.applyTheme();
    let theme = this.darkTheme ? 'dark' : 'light';
    this.localStorageService.setTheme(theme);
  }

  private applyTheme(): void {
    if (this.darkTheme) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }

}
