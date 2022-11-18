import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreHGComponent } from './carre-hg.component';

describe('CarreHGComponent', () => {
  let component: CarreHGComponent;
  let fixture: ComponentFixture<CarreHGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreHGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreHGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
