import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateperiodoComponent } from './updateperiodo.component';

describe('UpdateperiodoComponent', () => {
  let component: UpdateperiodoComponent;
  let fixture: ComponentFixture<UpdateperiodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateperiodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
