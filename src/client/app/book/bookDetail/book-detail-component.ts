/**
 * Created by sam on 29/12/2016.
 *
 * Affiche un livre en entier
 */
import {Component, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import {Book} from '../../shared/models';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector:        'book-detail',
    templateUrl:     './book-detail-component.html',
    styleUrls:       ['./book-detail-component.scss']
})
export class BookDetailComponent implements OnChanges {

    @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
    @Input() book: Book;

    update = false;

    constructor() {
    }

    /**
     * En cas de mise à jour du book, remise de update à false au cas où le formulaire est affiché
     */
    ngOnChanges() {
        this.update = false;
    }

    /**
     * Affichage/masquage du formulaire de mise à jour
     */
    toggleUpdateMode() {
        this.update = !this.update;
    }

    /**
     * Un livre a été mis à jour : masquage du formulaire et envoi d'un évènement au parent
     * @param event
     */
    bookUpdated(event) {
        this.book   = event.book;
        this.update = false;
        this.onUpdate.emit(this.book);
    }
}
