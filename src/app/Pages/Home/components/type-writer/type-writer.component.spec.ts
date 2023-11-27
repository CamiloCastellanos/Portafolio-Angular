import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWriterComponent } from './type-writer.component';

describe('TypeWriterComponent', () => {
  let component: TypeWriterComponent;
  let fixture: ComponentFixture<TypeWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeWriterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
