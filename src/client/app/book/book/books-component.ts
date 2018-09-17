/**
 * Created by sam on 29/12/2016.
 *
 * Component racine de la page.
 * Est responsable de la liste des livres et la fournit aux components enfants
 */
import {Component, OnInit} from '@angular/core';

import {Book} from '../../shared/models';
import {BookService} from '../../core/services';

@Component({
    selector:    'app-books',
    templateUrl: './books-component.html',
    styleUrls:   ['./books-component.scss']
})
export class BooksComponent implements OnInit {

    title: string;
    selection: Book;
    books: Array<Book>;
    error = false;

    constructor(private bookService: BookService) {
    }

    ngOnInit() {
        this.title = 'Gestion des livres';
        this.getBooks();
    }

    /**
     * Récupère tous les livres sur le serveur
     */
    getBooks() {
        this.error = false;

        this.bookService.getBooks().subscribe(
            books => {
                this.books = books.sort((a, b) => a.title > b.title ? 1 : -1);
            },
            error => {
                this.error = true;
            });
    }

    /**
     * On reçoit un évènement de sélection d'un livre.
     * La sélection est fournie au composant de détail
     * @param event
     */
    selectBook(event) {
        this.selection = event.book;
    }
}
