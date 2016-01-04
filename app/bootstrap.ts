import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {AppComponent} from './app.component'
import {DialogService}    from './dialog.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    //provide(LocationStrategy, { useClass: HashLocationStrategy }),
    DialogService
]);
