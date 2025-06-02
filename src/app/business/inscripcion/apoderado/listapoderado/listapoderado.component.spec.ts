import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapoderadoComponent } from './listapoderado.component';

describe('ListapoderadoComponent', () => {
  let component: ListapoderadoComponent;
  let fixture: ComponentFixture<ListapoderadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListapoderadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListapoderadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
