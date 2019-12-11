import {Component, OnInit} from '@angular/core';
import {AppprincComponent} from '../princ/appprinc.component';
import {environment} from '../../../environments/environment';
import {
    derAIzAderButAnimation,
    derAIzAnimation,
    IzADerAnimation
} from '../../animations/listanim.animations';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html', styleUrls: ['./app.topbar.scss'],
    animations: [derAIzAnimation, IzADerAnimation, derAIzAderButAnimation]
})
export class AppTopBarComponent implements OnInit {

    constructor(public app: AppprincComponent) {
    }

    ngOnInit() {
    }
}
