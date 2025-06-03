import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss',

})
export class SwitchThemeComponent {
  @Input() widthButton: string = "";
  @Input() heightButton: string = ""
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkTheme();
  }

  changeTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDarkTheme();
  }
}
