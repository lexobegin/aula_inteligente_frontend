import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterapoderadoComponent } from './registerapoderado.component';

describe('RegisterapoderadoComponent', () => {
  let component: RegisterapoderadoComponent;
  let fixture: ComponentFixture<RegisterapoderadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterapoderadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterapoderadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
