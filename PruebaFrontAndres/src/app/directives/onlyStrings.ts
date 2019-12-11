import {Directive, HostListener} from '@angular/core';
@Directive({
    selector: '[appOnlyStrings]'
})
export class OnlyStringsDirective {
    // previene caracteres especiales en todos los input de tipo 'fechas' sólo permite números positivos más el signo /
    // o previene pegar informacion que contenga strings sólo permite fechas
    @HostListener('keydown', ['$event'])
    keydownEvent(event) {
        // única combinación de carecteres permitidos
        // OJO SE ESCRIBEN TECLAS ESPECIALES EN MAYUSCULAS POR LA FUNCION TOUPPERCASE.
        // más ctrl + c , ctrl + v ,ctrl + x,ctrl + z, ctrl + a, ctrl + e, Tab, Borrar, Suprimir, Flechas
        const validCharsLocal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'ñ',
            'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'TAB', 'ARROWLEFT', 'ARROWRIGHT',
            'HOME', 'END', 'ENTER', 'BACKSPACE', 'DELETE', 'CONTROL', 'SHIFT', 'META'];
        const permit = ['C', 'V', 'X', 'Z', 'A', 'E'];
        if ((event.metaKey) && (permit.indexOf(event.key.toUpperCase()) > -1)) {
        } else if ((event.ctrlKey) && (permit.indexOf(event.key.toUpperCase()) > -1)) {
        } else if (validCharsLocal.indexOf(event.key.toUpperCase()) === -1) {
            event.preventDefault();
        }
    }
    @HostListener('paste', ['$event']) pasteEvent(event) {
        // verifica con la expresión regular de números y si contiene texto no permite pegar
        if (!event.clipboardData.getData('text').match(/^([^0-9]*)$/)) {
            event.preventDefault();
        }
    }
}
