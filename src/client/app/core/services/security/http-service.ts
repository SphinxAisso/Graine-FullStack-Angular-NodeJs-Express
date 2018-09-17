/**
 * Created by sam on 29/12/2016.
 *
 * Extension de Http jouant le rôle d'interceptor
 * Ajoute le jwt dans les headers pour les appels authentifiés
 */
import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {AuthenticationService} from './authentication-service';

@Injectable()
export class HttpService {

    constructor(private http: Http,
                private authService: AuthenticationService) {
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        options = this.updateOptions(options);
        return this.http.get(url, options)
            .catch(error => Observable.throw(error));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        options = this.updateOptions(options);
        return this.http.put(url, body, options)
            .catch(error => Observable.throw(error));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        options = this.updateOptions(options);
        return this.http.post(url, body, options)
            .catch(error => Observable.throw(error));
    }

    updateOptions(options?: RequestOptionsArgs): any {
        if (!options) {
            options = new RequestOptions();
        }

        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Authorization', 'Bearer ' + this.authService.token);
        return options;
    }
}
