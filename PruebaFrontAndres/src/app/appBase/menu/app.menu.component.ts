import {Component, Input, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {AppprincComponent} from '../princ/appprinc.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import menulab from './app.menu_labels.json';
import Utils from '../../statics/utils';
import {derAIzAderButAnimation, subirAnimation, subirAnimationMenu} from '../../animations/listanim.animations';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html', styleUrls: ['./app.menu.scss'],
    animations: [subirAnimation, derAIzAderButAnimation, subirAnimationMenu]
})
export class AppMenuComponent implements OnInit {
    lbl: any = menulab;
    model: any[];


    constructor(public app: AppprincComponent) {
    }


    ngOnInit() {
        this.model = [
            {
                label: this.lbl.Roles, routerLink: ['/roles'], icon: ''
            },
            {
                label: this.lbl.Usu, routerLink: ['/usuarios'], icon: ''
            },
            {
                label: this.lbl.Men, routerLink: ['/mensajes'], icon: ''
            }
        ];
    }


}

@Component({
    selector: '[app-submenu]',
    templateUrl: './app.submenu.component.html',
    animations: [
        trigger('children', [
            state('visible', style({
                height: '*'
            })),
            state('hidden', style({
                height: '0px'
            })),
            transition('visible => hidden', animate('600ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('600ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;
    @Input() root: boolean;
    activeIndex: number;
    hover: boolean;

    constructor(public app: AppprincComponent, public appMenu: AppMenuComponent) {
    }

    itemClick(event: Event, item: MenuItem, index: number) {
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        if (item.routerLink || item.items || item.command || item.url) {
            this.activeIndex = (this.activeIndex as number === index) ? -1 : index;
        }

        if (item.command) {
            item.command({originalEvent: event, iteme: item});
        }

        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }

        if (!item.items) {
            this.app.onMenuButtonClick(event);
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }
}
