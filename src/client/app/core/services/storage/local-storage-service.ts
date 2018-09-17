/**
 * Created by sam on 29/12/2016.
 *
 * Gestion du stockage local du navigateur
 */
import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    localStorage: any = window.localStorage;

    /**
     * Récupère une clé dans le localStorage
     * @param cle
     * @returns {undefined}
     */
    get(cle) {
        return this.localStorage.getItem(cle) && this.localStorage.getItem(cle) !== 'undefined' ? JSON.parse(this.localStorage.getItem(cle)) : undefined;
    }

    /**
     * Stocke une paire clé-valeur dans le localStorage
     * @param cle
     * @param valeur
     */
    set(cle, valeur) {
        this.localStorage.setItem(cle, JSON.stringify(valeur));
    }

    /**
     * Supprime une paire clé-valeur du localStorage
     * @param cle
     */
    removeItem(cle) {
        this.localStorage.removeItem(cle);
    }

    /**
     * Vide tout le contenu du localStorage
     */
    clear() {
        this.localStorage.clear();
    }
}
