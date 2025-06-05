import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMobileComponent } from './project-mobile.component';

describe('ProjectMobileComponent', () => {
  let component: ProjectMobileComponent;
  let fixture: ComponentFixture<ProjectMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
