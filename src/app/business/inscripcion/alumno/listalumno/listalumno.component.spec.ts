import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalumnoComponent } from './listalumno.component';

describe('ListalumnoComponent', () => {
  let component: ListalumnoComponent;
  let fixture: ComponentFixture<ListalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListalumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
