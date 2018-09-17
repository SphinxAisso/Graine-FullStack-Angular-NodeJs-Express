import {RouterModule, Routes} from '@angular/router';

import {HomeComponent, AboutComponent, LoginComponent} from './core/components';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: '/home'}
];

export const routing = RouterModule.forRoot(routes);
