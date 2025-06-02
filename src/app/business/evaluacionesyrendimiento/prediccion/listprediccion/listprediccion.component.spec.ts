import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprediccionComponent } from './listprediccion.component';

describe('ListprediccionComponent', () => {
  let component: ListprediccionComponent;
  let fixture: ComponentFixture<ListprediccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListprediccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListprediccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
