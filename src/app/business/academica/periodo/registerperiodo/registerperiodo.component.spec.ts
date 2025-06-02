import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterperiodoComponent } from './registerperiodo.component';

describe('RegisterperiodoComponent', () => {
  let component: RegisterperiodoComponent;
  let fixture: ComponentFixture<RegisterperiodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterperiodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
