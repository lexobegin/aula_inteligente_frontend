import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListusuarioComponent } from './listusuario.component';

describe('ListusuarioComponent', () => {
  let component: ListusuarioComponent;
  let fixture: ComponentFixture<ListusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListusuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
