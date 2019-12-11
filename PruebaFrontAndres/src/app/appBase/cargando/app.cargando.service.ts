import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import Utils from '../../statics/utils';

@Injectable({
    providedIn: 'root'
})
export class AppCargandoService {
    private cargand = false;
    private ejeServP = false;
    cargandoEstado: Subject<any> = new Subject();
    utils = Utils;

    get ejeServPost(): boolean {
        return this.cargand;
    }

    set ejeServPost(value) {
        this.ejeServP = value;

    }


    get cargando(): boolean {
        return this.cargand;
    }

    set cargando(value) {
        this.cargand = value;
        this.cargandoEstado.next(value);
    }

    iniciarCargando() {
        this.cargando = true;
        this.utils.DesacScroll(null);
    }

    detenCargando() {
        this.cargando = false;
        this.utils.ActScroll();
    }
}
