import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
 templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  result: number = 0;

  calculate(operation: string, num1: string, num2: string) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        this.result = n1 + n2;
        break;
      case 'subtract':
        this.result = n1 - n2;
        break;
      case 'multiply':
        this.result = n1 * n2;
        break;
      case 'divide':
        this.result = n1 / n2;
        break;
    }
  }
}
