import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatealumnoComponent } from './updatealumno.component';

describe('UpdatealumnoComponent', () => {
  let component: UpdatealumnoComponent;
  let fixture: ComponentFixture<UpdatealumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatealumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatealumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
