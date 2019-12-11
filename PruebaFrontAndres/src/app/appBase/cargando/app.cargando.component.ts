import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppCargandoService} from './app.cargando.service';
@Component({
    selector: 'app-cargando',
    templateUrl: './app.cargando.component.html'
})

export class AppCargandoComponent implements OnInit, OnDestroy {
    constructor(private cargandoService: AppCargandoService) {
    }

    cargando = false;
    loadingSubscription: Subscription;

    ngOnInit() {
        this.loadingSubscription = this.cargandoService.cargandoEstado.subscribe((value) => {
            this.cargando = value;
        });
    }

    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }



}
