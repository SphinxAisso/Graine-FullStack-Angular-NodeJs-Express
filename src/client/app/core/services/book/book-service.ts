/**
 * Created by sam on 29/12/2016.
 *
 * Service manipulant les livres
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {HttpService} from '../security/http-service';
import {Book} from '../../../shared/models';

@Injectable()
export class BookService {

    constructor(private http: HttpService) {
    }

    /**
     * Récupère la liste complète des livres
     * @returns {Observable<R>}
     */
    getBooks(): Observable<Array<Book>> {
        let url = `/api/books`;
        return this.http.get(url).map(result => {
            let books = result.json();
            return books.map(o => new Book(o));
        });
    }

    /**
     * Crée un livre
     * @param bookData
     * @returns {Observable<R>}
     */
    createBook(bookData: Book): Observable<Book> {
        let url = `/api/books`;
        delete bookData._id;
        return this.http.post(url, bookData).map(result => {
            return new Book(result.json());
        });
    }

    /**
     * Modifie un livre
     * @param bookData
     * @returns {Observable<R>}
     */
    updateBook(bookData: Book): Observable<Book> {
        let url = `/api/books`;
        return this.http.put(url, bookData).map(result => {
            return new Book(result.json());
        });
    }
}
