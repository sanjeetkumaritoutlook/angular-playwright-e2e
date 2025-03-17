import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { evaluate } from 'mathjs';
@Component({
  selector: 'app-complex-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './complex-calculator.component.html',
  styleUrl: './complex-calculator.component.css'
})
export class ComplexCalculatorComponent {
  currentValue: string = '';
  memory: number = 0;

  handleButtonClick(value: string) {
    if (value === '=') {
      this.calculateResult();
    } else if (value === 'C') {
      this.clear();
    } else if (value === 'M+') {
      this.memory += parseFloat(this.currentValue);
    } else if (value === 'M-') {
      this.memory -= parseFloat(this.currentValue);
    } else if (value === 'MR') {
      this.currentValue = this.memory.toString();
    } else if (value === 'MC') {
      this.memory = 0;
    } else {
      this.currentValue += value;
    }
  }

  calculateResult() {
    try {
      this.currentValue = Function(`'use strict'; return (${this.currentValue})`)();
     //this.currentValue = evaluate(this.currentValue).toString();
    } catch {
      this.currentValue = 'Error';
    }
  }
  

  clear() {
    this.currentValue = '';
  }
}
