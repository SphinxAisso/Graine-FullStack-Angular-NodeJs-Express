/**
 * Created by sam on 29/12/2016.
 *
 * Module de gestion de tout ce qui concerne les schémas
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared-module';

import {BooksComponent} from './book/books-component';
import {BookDetailComponent} from './bookDetail/book-detail-component';
import {BookListComponent} from './bookList/book-list-component';
import {BookEditorComponent} from './editBook/book-editor-component';
import {bookRouting} from './book-routing';

@NgModule({
    imports:      [
        BrowserModule,
        RouterModule,
        FormsModule,
        SharedModule,
        bookRouting
    ],
    exports:      [
    ],
    declarations: [
        BooksComponent,
        BookListComponent,
        BookDetailComponent,
        BookEditorComponent
    ],
    providers:    []
})
export class BookModule {
}
