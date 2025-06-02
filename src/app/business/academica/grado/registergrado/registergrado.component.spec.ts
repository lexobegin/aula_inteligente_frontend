import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistergradoComponent } from './registergrado.component';

describe('RegistergradoComponent', () => {
  let component: RegistergradoComponent;
  let fixture: ComponentFixture<RegistergradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistergradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistergradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
