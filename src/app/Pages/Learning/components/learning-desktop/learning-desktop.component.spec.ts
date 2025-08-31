import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDesktopComponent } from './learning-desktop.component';

describe('LearningDesktopComponent', () => {
  let component: LearningDesktopComponent;
  let fixture: ComponentFixture<LearningDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
