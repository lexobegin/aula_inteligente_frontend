import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateapoderadoComponent } from './updateapoderado.component';

describe('UpdateapoderadoComponent', () => {
  let component: UpdateapoderadoComponent;
  let fixture: ComponentFixture<UpdateapoderadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateapoderadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateapoderadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
