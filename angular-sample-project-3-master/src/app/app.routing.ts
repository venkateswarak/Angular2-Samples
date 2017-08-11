import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { Routes, RouterModule } from "@angular/router";
import { USER_ROUTES } from './panel/panel.routes';


const APP_ROUTES: Routes = [
{ path: 'panel', component: PanelComponent},
{ path: 'panel', component: PanelComponent, children: USER_ROUTES},
];

export const routing = RouterModule.forRoot(APP_ROUTES);