import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistergestionComponent } from './registergestion.component';

describe('RegistergestionComponent', () => {
  let component: RegistergestionComponent;
  let fixture: ComponentFixture<RegistergestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistergestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistergestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
