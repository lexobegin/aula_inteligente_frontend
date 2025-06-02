import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgestionComponent } from './listgestion.component';

describe('ListgestionComponent', () => {
  let component: ListgestionComponent;
  let fixture: ComponentFixture<ListgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListgestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
