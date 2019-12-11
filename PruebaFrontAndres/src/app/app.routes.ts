import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RolesComponent} from './formas/roles';
import {UsuariosComponent} from './formas/usuarios';
import {MensajeComponent} from './formas/mensajes';
import {AppprincComponent} from './appBase/princ/appprinc.component';
import {BlankComponent} from './formas/blank';
import {AuthGuardHome} from './guards';


export const routes: Routes = [
    {

        path: '', component: AppprincComponent,
        children: [
            {path: 'enconst', component: BlankComponent, canActivate: []},
            {path: '', component: BlankComponent, canActivate: [AuthGuardHome]},
            {path: 'roles', component: RolesComponent, canActivate: []},
            {path: 'usuarios', component: UsuariosComponent, canActivate: []},
            {path: 'mensajes', component: MensajeComponent, canActivate: []}]
            
    },
    {path: '**', redirectTo: ''}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
