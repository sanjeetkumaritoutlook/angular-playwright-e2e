import { Routes } from '@angular/router';
import { UserGridComponent } from './user-grid/user-grid.component';
import { CalculatorComponent } from './calculator/calculator.component';
export const routes: Routes = [
    {path:'',
        redirectTo:'dataBinding',
        pathMatch:   'full'
       },
    { path: 'about', component: UserGridComponent },
    { path: 'calculator', component: CalculatorComponent }
];
