import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

import { Routes, RouterModule } from "@angular/router"

const APP_ROUTES: Routes = [
{ path: 'child', component: ChildComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);