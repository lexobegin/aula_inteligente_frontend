import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofesorComponent } from './updateprofesor.component';

describe('UpdateprofesorComponent', () => {
  let component: UpdateprofesorComponent;
  let fixture: ComponentFixture<UpdateprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateprofesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
