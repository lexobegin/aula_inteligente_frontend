import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgradoComponent } from './listgrado.component';

describe('ListgradoComponent', () => {
  let component: ListgradoComponent;
  let fixture: ComponentFixture<ListgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListgradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
