import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprofesorComponent } from './registerprofesor.component';

describe('RegisterprofesorComponent', () => {
  let component: RegisterprofesorComponent;
  let fixture: ComponentFixture<RegisterprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterprofesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
