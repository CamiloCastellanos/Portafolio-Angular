import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMovileComponent } from './navbar-movile.component';

describe('NavbarMovileComponent', () => {
  let component: NavbarMovileComponent;
  let fixture: ComponentFixture<NavbarMovileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarMovileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
