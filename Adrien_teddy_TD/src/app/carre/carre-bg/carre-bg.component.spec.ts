import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreBGComponent } from './carre-bg.component';

describe('CarreBGComponent', () => {
  let component: CarreBGComponent;
  let fixture: ComponentFixture<CarreBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreBGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
