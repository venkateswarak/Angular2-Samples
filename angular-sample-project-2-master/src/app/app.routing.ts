import { AppComponent } from './app.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

import { Routes, RouterModule} from "@angular/router"

const APP_ROUTES: Routes = [
    { path: 'childcomponent', component:ChildcomponentComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES)