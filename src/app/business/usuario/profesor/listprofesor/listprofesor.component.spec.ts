import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprofesorComponent } from './listprofesor.component';

describe('ListprofesorComponent', () => {
  let component: ListprofesorComponent;
  let fixture: ComponentFixture<ListprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListprofesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
