/**
 * Created by sam on 29/12/2016.
 *
 * Liste les livres disponibles et permet la création de nouveaux
 */
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {Book} from '../../shared/models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector:        'book-list',
    templateUrl:     './book-list-component.html',
    styleUrls:       ['./book-list-component.scss']
})
export class BookListComponent {

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
    @Input() selection: string;
    @Input() books: Array<Book>;

    showBookForm = false;

    constructor() {
    }

    /**
     * Sélection d'un item : envoi d'un évènement au parent pour qu'il charge le détail
     * @param item
     */
    select(item: Book) {
        this.onSelect.emit({book: item});
    }

    /**
     * Affichage ou masquage du formulaire d'édition
     */
    toggle() {
        this.showBookForm = !this.showBookForm;
    }

    /**
     * Un livre est créé : envoi d'un évènement au parent pour qu'il rafraichisse la liste
     */
    bookUpdated() {
        this.onUpdate.emit(null);
        this.showBookForm = false;
    }
}
