import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMobileComponent } from './learning-mobile.component';

describe('LearningMobileComponent', () => {
  let component: LearningMobileComponent;
  let fixture: ComponentFixture<LearningMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearningMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
