import { Routes } from '@angular/router';
import { UserGridComponent } from './user-grid/user-grid.component';
export const routes: Routes = [
    {path:'',
        redirectTo:'dataBinding',
        pathMatch:   'full'
       },
    { path: 'about', component: UserGridComponent }
];
