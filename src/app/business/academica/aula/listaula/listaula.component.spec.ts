import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaulaComponent } from './listaula.component';

describe('ListaulaComponent', () => {
  let component: ListaulaComponent;
  let fixture: ComponentFixture<ListaulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
