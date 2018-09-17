/**
 * Created by sam on 29/12/2016.
 *
 * Gestion du stockage de session du navigateur
 */

import {Injectable} from '@angular/core';

@Injectable()
export class SessionStorageService {

    sessionStorage: any = window.sessionStorage;

    constructor() {
    }

    /**
     * Récupère une clé dans le sessionStorage
     * @param cle
     * @returns {undefined}
     */
    get(cle) {
        return this.sessionStorage.getItem(cle) && this.sessionStorage.getItem(cle) !== 'undefined' ? JSON.parse(this.sessionStorage.getItem(cle)) : undefined;
    }

    /**
     * Stocke une paire clé-valeur dans le sessionStorage
     * @param cle
     * @param valeur
     */
    set(cle, valeur) {
        this.sessionStorage.setItem(cle, JSON.stringify(valeur));
    }

    /**
     * Supprime une paire clé-valeur du sessionStorage
     * @param cle
     */
    removeItem(cle) {
        this.sessionStorage.removeItem(cle);
    }

    /**
     * Vide tout le contenu du sessionStorage
     */
    clear() {
        this.sessionStorage.clear();
    }
}

