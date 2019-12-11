import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {AppMenuComponent, AppSubMenuComponent} from './appBase/menu/app.menu.component';
import {AppTopBarComponent} from './appBase/topbar/app.topbar.component';
import {AppFooterComponent} from './appBase/footer/app.footer.component';
import {DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppprincComponent} from './appBase/princ/appprinc.component';
import {AppCargandoComponent} from './appBase/cargando/app.cargando.component';
import {AppCargandoService} from './appBase/cargando/app.cargando.service';
import {BlankComponent} from './formas/blank';
import {
    MatAutocompleteModule,
    MatButtonModule, MatDividerModule,
    MatIconModule,
    MatNativeDateModule, MatRadioModule,
    MatStepperModule, MatCheckboxModule
} from '@angular/material';
import {DataViewModule} from 'primeng/dataview';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MAT_DATE_LOCALE} from '@angular/material';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../environments/environment';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {AppSidebarComponent} from './appBase/sidebar/app.sidebar.component';
import {OnlyStringsDirective} from './directives/onlyStrings';
import {AuthGuardHome} from './guards';
import {ClockComponent} from './appBase/clock/clock.component';
import {XsegundoService} from './appBase/clock/xsegundo.service';
import {RolesComponent} from './formas/roles';
import {HttpConfigInterceptor} from './interceptors/httpconfig.interceptor';
import { UsuariosComponent } from './formas/usuarios';
import { MensajeComponent } from './formas/mensajes';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutes,
        HttpClientModule,
        ScrollPanelModule,
        DialogModule,
        FormsModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatDividerModule,
        MatRadioModule,
        MatCheckboxModule,
        InputTextModule,
        DataViewModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })

    ],
    declarations: [
        // Directivas
        OnlyStringsDirective,
        // Componentes
        AppComponent,
        AppCargandoComponent,
        AppprincComponent,
        AppSidebarComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,
        RolesComponent,
        UsuariosComponent,
        MensajeComponent,
        BlankComponent,
        ClockComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true
        },
        {provide: MAT_DATE_LOCALE, useValue: navigator.language},
        MessageService, XsegundoService, AppCargandoService, AuthGuardHome, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        `${environment.i18nPrefix}/assets/i18n/`,
        '.json'
    );
}

