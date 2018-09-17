/**
 * Created by sam on 29/12/2016.
 *
 * Mire de connexion
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthenticationService} from '../../services';

@Component({
    selector: 'app-login',
    templateUrl: 'login-component.html',
    styleUrls:   ['./login-component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading    = false;
    error      = '';
    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {
    }

    /**
     * Initialisation : mémorisation de l'url où naviguer une fois le login réalisé
     */
    ngOnInit() {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    /**
     * Connexion
     */
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result) {
                    // login ok
                    this.router.navigate([this.returnUrl]);
                } else {
                    // login ko
                    this.error   = 'Login ou mot de passe incorrect';
                    this.loading = false;
                }
            },
            error => {
                // login ko
                this.error   = 'Login ou mot de passe incorrect';
                this.loading = false;
            });
    }
}
