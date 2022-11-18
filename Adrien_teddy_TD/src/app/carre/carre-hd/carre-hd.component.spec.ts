import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreHDComponent } from './carre-hd.component';

describe('CarreHDComponent', () => {
  let component: CarreHDComponent;
  let fixture: ComponentFixture<CarreHDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreHDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
