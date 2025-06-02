import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListperiodoComponent } from './listperiodo.component';

describe('ListperiodoComponent', () => {
  let component: ListperiodoComponent;
  let fixture: ComponentFixture<ListperiodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListperiodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
