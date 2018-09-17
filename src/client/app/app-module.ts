import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrettyJsonModule} from 'angular2-prettyjson';

import {CoreModule} from './core/core-module';
import {BookModule} from './book/book-module';
import {AppComponent} from './app-component';
import {routing} from './app-routing';

import {removeNgStyles, createNewHosts} from '@angularclass/hmr';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        PrettyJsonModule,
        routing,
        CoreModule,
        BookModule
    ],
    declarations: [AppComponent],
    bootstrap:    [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation       = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
