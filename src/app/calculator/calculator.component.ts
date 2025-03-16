import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
  <h1>Simple Calculator</h1>
  <h2>Angular v20:Week of 2025-05-26 <a href="https://github.com/angular/angular-cli/pull/29796" target="_blank">v20</a></h2>
  <h2>New features: <a href="https://github.com/railsstudent/angular20-new-features/tree/main" target="_blank">v20</a></h2>
  <input [(ngModel)]="num1" type="number" />
  <input [(ngModel)]="num2" type="number" />
  <button (click)="addNumbers()">Add</button>
  <h2>Result: {{ result }}</h2>
`,
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  result = 0;

  addNumbers() {
    this.result = this.num1 + this.num2;
  }
}
