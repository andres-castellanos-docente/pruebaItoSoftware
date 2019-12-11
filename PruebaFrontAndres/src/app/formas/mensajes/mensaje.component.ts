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
    templateUrl: './mensaje.component.html',
    styleUrls: ['./mensaje.component.scss'],
    animations: [subirAnimationWait]
})

@Injectable()
export class MensajeComponent implements OnInit {

    constructor(public datepipe: DatePipe,
        private formBuilder: FormBuilder, private http: HttpClient, private cargServ: AppCargandoService) {
    }
    regCrearMensaje: FormGroup;
    submittedCrearMensaje: boolean;
    ngOnInit() {
            // Formulario Crear Mensaje
     var today = new Date();
    this.regCrearMensaje = this.formBuilder.group({
        destinatarioId: ['', Validators.required],
        mensaje: ['', Validators.required],
        fechaRegistro: [today, Validators.required],
        leido: ['0', Validators.required],
        origen: ['SISTEMA', Validators.required]
    });
    
    }

    get formCrearMensaje() {
        return this.regCrearMensaje.controls;
    }
    
    submitCrearMensaje(){
        this.submittedCrearMensaje = true;
          this.http.post(environment.apiUrl + 'administracion/mensaje',{
            activo:'true',
            destinatarioId: Number(this.formCrearMensaje.destinatarioId.value),
            mensaje: this.formCrearMensaje.mensaje.value,
            leido: Number('0'),
            origen: 'SISTEMA'
          })
          .subscribe((data: any) => {
                debugger;
                alert('Mensaje Creado');
    
              this.cargServ.detenCargando();
          });

    }

}
