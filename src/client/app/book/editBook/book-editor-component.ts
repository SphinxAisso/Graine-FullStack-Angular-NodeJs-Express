/**
 * Created by sam on 29/12/2016.
 *
 * Formulaire d'édition de livre : création ou modifications
 */
import {Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Book} from '../../shared/models';
import {BookService} from '../../core/services';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector:        'book-editor',
    templateUrl:     './book-editor-component.html',
    styleUrls:       ['./book-editor-component.scss']
})
export class BookEditorComponent implements OnInit {

    @Output() onClose: EventEmitter<any>       = new EventEmitter<any>();
    @Output() onBookUpdated: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    set book(b: Book) {
        this._book = new Book(b);
    }

    _book: Book;
    error      = '';
    updateMode = false;

    constructor(private bookService: BookService,
                private cd: ChangeDetectorRef) {
    }

    /**
     * Si aucun book n'est fourni, on considère qu'on est en mode création
     * Sinon, le book est chargé dans le formulaire
     */
    ngOnInit() {
        this.updateMode = !!this._book;
        if (!this._book) {
            this._book = new Book();
        }
    }

    /**
     * Annuler l'action : émet un évènement au parent pour que ce component soit masqué
     */
    cancel() {
        this.onClose.emit(null);
    }

    /**
     * Gère la création ou la mise à jour du livre
     */
    manageBook() {
        this.getBookObservable().subscribe(
            book => {
                this.onBookUpdated.emit({book: this._book});
            },
            error => {
                this.error = error.error.errorType === 'uniqueViolated' ? 'Le titre du livre existe déjà.' : error.message;
                this.cd.markForCheck();
            });
    }

    /**
     * Sélection de l'observable à utiliser en fonction du mode de mise à jour
     * @returns {Observable<Book>}
     */
    getBookObservable(): Observable<any> {
        return this.updateMode ? this.bookService.updateBook(this._book) : this.bookService.createBook(this._book);
    }
}
