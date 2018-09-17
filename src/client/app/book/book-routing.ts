/**
 * Created by sam on 29/12/2016.
 */
import {RouterModule, Routes} from '@angular/router';

import {AuthGuardService} from '../core/services';
import {BooksComponent} from './book/books-component';

const bookRoutes: Routes = [
    {
        path:        'books',
        canActivate: [AuthGuardService],
        component:   BooksComponent
    }
];

export const bookRouting = RouterModule.forChild(bookRoutes);
