import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarprediccionComponent } from './generarprediccion.component';

describe('GenerarprediccionComponent', () => {
  let component: GenerarprediccionComponent;
  let fixture: ComponentFixture<GenerarprediccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarprediccionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerarprediccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
