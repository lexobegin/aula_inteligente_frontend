import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemateriaComponent } from './updatemateria.component';

describe('UpdatemateriaComponent', () => {
  let component: UpdatemateriaComponent;
  let fixture: ComponentFixture<UpdatemateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatemateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatemateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
