import { Routes } from '@angular/router';
import { UserGridComponent } from './user-grid/user-grid.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ComplexCalculatorComponent } from './complex-calculator/complex-calculator.component';
export const routes: Routes = [
    {path:'',
        redirectTo:'dataBinding',
        pathMatch:   'full'
       },
    { path: 'about', component: UserGridComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'complex-calculator', component: ComplexCalculatorComponent }
];
