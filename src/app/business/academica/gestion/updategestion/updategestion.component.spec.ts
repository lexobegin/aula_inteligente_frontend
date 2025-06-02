import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdategestionComponent } from './updategestion.component';

describe('UpdategestionComponent', () => {
  let component: UpdategestionComponent;
  let fixture: ComponentFixture<UpdategestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdategestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdategestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
