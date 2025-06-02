import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteraulaComponent } from './registeraula.component';

describe('RegisteraulaComponent', () => {
  let component: RegisteraulaComponent;
  let fixture: ComponentFixture<RegisteraulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteraulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteraulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
