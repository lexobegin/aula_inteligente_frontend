import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermateriaComponent } from './registermateria.component';

describe('RegistermateriaComponent', () => {
  let component: RegistermateriaComponent;
  let fixture: ComponentFixture<RegistermateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistermateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistermateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
