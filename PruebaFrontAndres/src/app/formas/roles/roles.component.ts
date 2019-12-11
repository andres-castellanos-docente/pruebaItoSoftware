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
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.scss'],
    animations: [subirAnimationWait]
})

@Injectable()
export class RolesComponent implements OnInit {

    constructor(public datepipe: DatePipe,
        private formBuilder: FormBuilder, private http: HttpClient, private cargServ: AppCargandoService) {
    }
    regConsulta: FormGroup;
    regCrealRol: FormGroup;
    utils = Utils;
    roles: any = [];
    libroslist: any = [];
    crearRolPop = false;
    crearRolPopCuerp = false;
    submittedRol = false;
    submittedCrearRol = false;
    titulo: string;
    creando: boolean;

    ngOnInit() {

    // Formulario Consulta
    this.regConsulta = this.formBuilder.group({
        nombreRol: ['', Validators.required]
    });

    // Formulario Crear Rol
    this.regCrealRol = this.formBuilder.group({
        idRol: ['', null],
        nombreRol: ['', Validators.required],
        descripcionRol: ['', Validators.required],
        estadoRol: ['', Validators.required]
    });
    

        this.utils.scrollTop();
       this.buscarTodosRoles();
    }

    get formConsulta() {
        return this.regConsulta.controls;
    }

    get formCrearRol() {
        return this.regCrealRol.controls;
    }

    hideRolCuerp() {
        const self = this;
        setTimeout(function a() {
            self.crearRolPopCuerp = false;
        }, 300);
    }

    buscarTodosRoles(){
        this.cargServ.iniciarCargando();
        try {
            this.http.get(environment.apiUrl + 'administracion/rol', {})
                .subscribe((data: {}) => {
                    this.roles = data;
                    this.cargServ.detenCargando();
                });



        } catch (e) {
            this.cargServ.detenCargando();
        }
    }


    buscarNombreRol(){
        this.submittedRol = true; 
        this.cargServ.iniciarCargando();
        try {
            const nombre = this.formConsulta.nombreRol.value;
            this.http.get(environment.apiUrl + 'administracion/rol/searchAutocomplete?nombre='+ nombre, {})
                .subscribe((data: any) => {
                    if (data.content === undefined)
                    {
                        this.roles = [];   
                    }else
                    {
                        this.roles = data.content;
                    }
                    this.cargServ.detenCargando();
                });



        } catch (e) {
        
            this.cargServ.detenCargando();
        }
    }

    crearRol(){
        this.creando = true;
        this.titulo = 'Crear Rol';
        this.crearRolPop = true;
        this.formCrearRol.estadoRol.setValue('true');

    }

    editarRol(rol: any){
        this.creando = false;
        this.titulo = 'Editar Rol';
        this.crearRolPop = true;
        this.formCrearRol.idRol.setValue(rol.id);
        this.formCrearRol.estadoRol.setValue(rol.activo);
        this.formCrearRol.descripcionRol.setValue(rol.descripcion);
        this.formCrearRol.nombreRol.setValue(rol.nombre);
    }

    submitEditarCrearRol(){ 
        this.submittedCrearRol = true;
        if (this.creando){

          this.http.post(environment.apiUrl + 'administracion/rol',{
            activo: this.formCrearRol.estadoRol.value,
            descripcion: this.formCrearRol.descripcionRol.value,
            nombre: this.formCrearRol.nombreRol.value,
            permisos: [
            ]
          })
          .subscribe((data: any) => {
            if (data.id !==undefined)
            {
                this.crearRolPop = false;
                this.buscarTodosRoles();
                alert('Rol Creado');
            }  
              this.cargServ.detenCargando();
          });
        } else {

            this.http.put(environment.apiUrl + 'administracion/rol',{
                id: Number(this.formCrearRol.estadoRol.value),
                activo: this.formCrearRol.estadoRol.value,
                descripcion: this.formCrearRol.descripcionRol.value,
                nombre: this.formCrearRol.nombreRol.value,
                permisos: [
                ]
              })
              .subscribe((data: any) => {
                debugger;  
                if (data.id !==undefined)
                {
                    this.crearRolPop = false;
                    this.buscarTodosRoles();
                    alert('Rol Editado');
                }  
           
                  this.cargServ.detenCargando();
              });  
        }


    }

    
    limpiarRol(){
        if (this.formConsulta.nombreRol.value !== ''){
            this.buscarTodosRoles();
        }
        this.formConsulta.nombreRol.setValue('');

    }
}
