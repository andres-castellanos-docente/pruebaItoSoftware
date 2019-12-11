import {Component, Injectable, OnInit} from '@angular/core';
import Utils from '../../statics/utils';
import {AppCargandoService} from '../../appBase/cargando/app.cargando.service';
import {
    subirAnimationWait
} from '../../animations/listanim.animations';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.scss'],
    animations: [subirAnimationWait]
})

@Injectable()
export class UsuariosComponent implements OnInit {

    constructor(public datepipe: DatePipe,
        private formBuilder: FormBuilder, private http: HttpClient, private cargServ: AppCargandoService) {
    }


    ngOnInit() {
    }

}
