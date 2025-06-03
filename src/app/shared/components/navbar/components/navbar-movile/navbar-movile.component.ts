import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-movile',
  templateUrl: './navbar-movile.component.html',
  styleUrl: './navbar-movile.component.scss'
})
export class NavbarMovileComponent {
  @ViewChild('menu') menuRef!: ElementRef;
  @ViewChild('border') borderRef!: ElementRef;
  @Output() changeLanguageEvent: EventEmitter<string> = new EventEmitter();

  activeItem: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.activeItem = this.menuRef.nativeElement.querySelector('.active');
    this.updateBorderPosition();

    const menuItems = this.menuRef.nativeElement.querySelectorAll('.menu-item');
    menuItems.forEach((item: HTMLElement, index: number) => {
      item.addEventListener('click', () => this.setActiveItem(item, index));
    });
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

  @HostListener('window:resize')
  onResize(): void {
    this.updateBorderPosition();
    this.menuRef.nativeElement.style.setProperty("--timeOut", "none");
  }
}
