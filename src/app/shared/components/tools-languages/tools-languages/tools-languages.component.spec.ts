import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsLanguagesComponent } from './tools-languages.component';

describe('ToolsLanguagesComponent', () => {
  let component: ToolsLanguagesComponent;
  let fixture: ComponentFixture<ToolsLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolsLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
