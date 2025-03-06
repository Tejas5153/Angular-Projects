import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    { 
        path: 'admin', 
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }
];
