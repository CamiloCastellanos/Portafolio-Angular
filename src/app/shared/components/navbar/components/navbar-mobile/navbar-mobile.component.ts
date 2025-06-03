import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('border') borderRef!: ElementRef;
  @Output() changeLanguageEvent: EventEmitter<string> = new EventEmitter();
  activeItem: HTMLElement | null = null;
  currentUrl: string = '';

  constructor(private router: Router, private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.updateSelectedMenu();
  }

  ngAfterViewChecked(): void {
    this.currentUrl = this.router.url.replace('/', '');
    this.updateSelectedMenu();
    this.changeDetector.detectChanges();
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
