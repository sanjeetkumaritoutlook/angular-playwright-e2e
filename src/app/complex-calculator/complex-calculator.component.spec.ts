import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexCalculatorComponent } from './complex-calculator.component';

describe('ComplexCalculatorComponent', () => {
  let component: ComplexCalculatorComponent;
  let fixture: ComponentFixture<ComplexCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplexCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
