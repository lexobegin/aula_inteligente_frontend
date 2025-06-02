import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteralumnoComponent } from './registeralumno.component';

describe('RegisteralumnoComponent', () => {
  let component: RegisteralumnoComponent;
  let fixture: ComponentFixture<RegisteralumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteralumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
