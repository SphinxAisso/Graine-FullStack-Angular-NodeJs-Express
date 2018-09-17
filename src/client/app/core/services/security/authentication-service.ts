/**
 * Created by sam on 29/12/2016.
 *
 * Service d'authentification
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {SessionStorageService} from '../storage/session-storage-service';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http,
                private sessionStorageService: SessionStorageService) {
        let currentUser = this.sessionStorageService.get('currentUser');
        this.token      = currentUser && currentUser.token;
    }

    /**
     * Authentification. Si OK, l'utilisateur courant est stocké avec son jeton dans le sessionStorage
     * @param username
     * @param password
     * @returns {Observable<R>}
     */
    login(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/auth/login', {username: username, password: password})
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    this.sessionStorageService.set('currentUser', {username: username, token: token});
                    return true;
                } else {
                    return false;
                }
            });
    }

    /**
     * Suppression du jeton pour se déconnecter
     */
    logout(): void {
        this.token = null;
        this.sessionStorageService.removeItem('currentUser');
    }
}
