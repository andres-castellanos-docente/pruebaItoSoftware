import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private translate: TranslateService) {
    }

    ngOnInit() {
        const def = 'es';
        // Verifica el lenguaje del navegador para setear idioma.
        const getNavigatorLanguage: string = (navigator.languages && navigator.languages.length) ?
            navigator.languages[0] : navigator.language || def;
        let index = getNavigatorLanguage.indexOf('-');
        if (index === -1) {
            index = getNavigatorLanguage.length;
        }
        let lang = getNavigatorLanguage.substring(0, index);
        // verifica si no cumple ninguna de las dos setea por default.
        if ((lang !== 'es') && (lang !== 'en')) {
            lang = def;
        }
        lang = 'es';
        this.translate.setDefaultLang(lang);
    }

}
