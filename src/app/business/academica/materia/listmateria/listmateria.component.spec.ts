import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmateriaComponent } from './listmateria.component';

describe('ListmateriaComponent', () => {
  let component: ListmateriaComponent;
  let fixture: ComponentFixture<ListmateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListmateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListmateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
