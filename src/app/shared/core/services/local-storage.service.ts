import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly themeKey = 'user-theme-preference';
  getTheme() {
    return localStorage.getItem(this.themeKey);
  }

  setTheme(theme: string) {
    localStorage.setItem(this.themeKey, theme);
  }

}
