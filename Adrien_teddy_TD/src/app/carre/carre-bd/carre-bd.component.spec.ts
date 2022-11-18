import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreBDComponent } from './carre-bd.component';

describe('CarreBDComponent', () => {
  let component: CarreBDComponent;
  let fixture: ComponentFixture<CarreBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreBDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
