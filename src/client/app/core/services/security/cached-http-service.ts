/**
 * Created by sam on 29/12/2016.
 *
 * Extension de HttpService permettant de cacher les résultats des requêtes Get
 */
import {Injectable} from '@angular/core';
import {RequestOptionsArgs, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {SessionStorageService} from '../storage/session-storage-service';
import {HttpService} from './http-service';

@Injectable()
export class CachedHttpService {

    constructor(private http: HttpService,
                private storage: SessionStorageService) {
    }

    /**
     * Si le storage contient l'url à appeler, on retourne la valeur correspondante.
     * Sinon, on effectue un vrai appel puis on stocke les infos dans le storage
     * @param url
     * @param options
     * @returns {any}
     */
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let storageValue = this.storage.get(url);

        if (storageValue) {
            return Observable.of(storageValue);
        } else {
            return this.http.get(url, options)
                .map(res => {
                    let jsonResult = res.json();
                    this.storage.set(url, jsonResult);
                    return jsonResult;
                });
        }
    }
}
