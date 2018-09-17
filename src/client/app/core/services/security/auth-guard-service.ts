/**
 * Created by sam on 29/12/2016.
 *
 * Service qui protège les routes en s'assurant qu'on y accède en étant authentifié
 */

import {Injectable} from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {SessionStorageService} from '../storage/session-storage-service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router,
                private sessionStorageService: SessionStorageService) {
    }

    /**
     * Si un jeton de connexion existe, la route est ouverte.
     * Sinon, navigation vers la page de login en fournissant l'url où l'on souhaite aller
     * @param route
     * @param state
     * @returns {boolean}
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.sessionStorageService.get('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
