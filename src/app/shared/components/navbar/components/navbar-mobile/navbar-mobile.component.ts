import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SwitchThemeComponent } from '../switch-theme/switch-theme.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    SwitchThemeComponent,
    TranslateModule,
    RouterLinkActive,
    RouterLink
  ]
})
export class NavbarMobileComponent {
  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('border') borderRef!: ElementRef;
  @Output() changeLanguageEvent: EventEmitter<string> = new EventEmitter();
  activeItem: HTMLElement | null = null;
  currentUrl: string = '';

  constructor(private router: Router, private changeDetector: ChangeDetectorRef) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.updateSelectedMenu();
          this.changeDetector.detectChanges();
        }, 50);
      });
  }

  ngAfterViewInit(): void {
    this.updateSelectedMenu();
  }

  setActiveItem(item: HTMLElement, index: number): void {
    if (this.activeItem === item) return;

    this.menuRef.nativeElement.style.removeProperty("--timeOut");

    if (this.activeItem) {
      this.activeItem.classList.remove("active");
    }

    item.classList.add("active");
    this.activeItem = item;
    this.updateBorderPosition();
  }

  updateBorderPosition(): void {
    if (!this.activeItem || !this.borderRef) return;

    const offsetActiveItem = this.activeItem.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - this.menuRef.nativeElement.offsetLeft -
      (this.borderRef.nativeElement.offsetWidth - offsetActiveItem.width) / 2) + "px";

    this.borderRef.nativeElement.style.transform = `translate3d(${left}, 0, 0)`;
  }

  changeLanguage(language: string) {
    this.changeLanguageEvent.emit(language);
  }

  updateSelectedMenu() {
    this.activeItem = this.menuRef.nativeElement.querySelector('.active');
    this.updateBorderPosition();

    const menuItems = this.menuRef.nativeElement.querySelectorAll('.menu-item');
    menuItems.forEach((item: HTMLElement, index: number) => {
      item.addEventListener('click', () => this.setActiveItem(item, index));
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateBorderPosition();
    this.menuRef.nativeElement.style.setProperty("--timeOut", "none");
  }
}
