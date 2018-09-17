/**
 * Created by sam on 29/12/2016.
 *
 * Module exposant les services singleton à toute l'application
 * Expose aussi quelques components rattachés à la racine de l'application
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {
    HomeComponent,
    AboutComponent,
    LoginComponent
} from './components';

import {
    LocalStorageService,
    SessionStorageService,
    AuthGuardService,
    HttpService,
    CachedHttpService,
    AuthenticationService,
    BookService
} from './services';


@NgModule({
    imports:      [CommonModule, FormsModule],
    declarations: [HomeComponent, AboutComponent, LoginComponent],
    exports:      [HomeComponent, AboutComponent, LoginComponent],
    providers:    [
        SessionStorageService,
        LocalStorageService,
        AuthGuardService,
        HttpService,
        CachedHttpService,
        AuthenticationService,
        BookService
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule est déjà importé. Ne l\'importer que dans AppModule');
        }
    }
}
