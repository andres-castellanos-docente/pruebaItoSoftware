import platform from '../../assets/js/platform.min';

export default class Utils {
    static centrardialog(dialog: any) {
        if (dialog) {
            setTimeout(function b() {
                dialog.center();
            }, 30);
            setTimeout(function b() {
                dialog.center();
            }, 100);
        }
    }
    // desactiva el scroll  y centra los dialogos
    static DesacScroll(d: any) {
        if (d) {
            Utils.centrardialog(d);
            // Sobreescribe el evento onresize para centrar el dialogo, corrije problema en movil al girar el celular no los centraba y
            // cambiaba el tamaño de los dialogos.
            d.onWindowResize = function a() {
                setTimeout(function b() {
                    d.center();
                }, 100);
            };

        }

        if (document.documentElement.style.position !== 'fixed') {
            const topVerticalOffset = (typeof window.pageYOffset !== 'undefined') ?
                window.pageYOffset : (document.documentElement.scrollTop ?
                    document.documentElement.scrollTop : 0);
            document.documentElement.style.position = 'fixed';
            document.documentElement.style.marginTop = '-' + topVerticalOffset + 'px';
            document.documentElement.style.width = '100%';
        }
    }

    // activa el scrolltouch en ios
    static ActScroll() {
        if (document.documentElement.style.position === 'fixed') {
            document.documentElement.style.position = null;
            const scrollPosition = -1 * parseFloat(document.documentElement.style.marginTop);
            document.documentElement.style.marginTop = null;
            window.scrollTo(0, scrollPosition);
        }

    }

    static downloadPdfChromeApp(linkSource: string) {
        // Función necesaria para bajar pdfs base64 en chrome movil
        // Crea un div y un object de tipo pdf para luego destruirlo y abrir una nueva ventana enviando la data
        // Asi se soluciona en chrome movil.
        const divpdf = document.createElement('div');
        divpdf.innerHTML = '<object  style="display:none;" id="docuFrame" type="application/pdf" width="0px" height="0px" data="' +
            linkSource + '"></object>';
        document.lastElementChild.appendChild(divpdf);
        const frame = document.getElementById('docuFrame') as HTMLObjectElement;
        window.open(frame.data);
        frame.remove();
        divpdf.remove();
    }

    static scrollTop() {
        window.scroll(0, 0);
    }



    static descargar(tipo: string, url: string, linkName: string) {
        // Verifica el navegador de ser Chrome o Opera convierte de base64 a Blob (Chrome permite máximo 2 mb por archivo en base64
        // Es necesario convertir de base64 a Blob para que funcione.
        const nombreNav = platform.name.toUpperCase();
        // alert(nombreNav);
        if ((nombreNav === 'CHROME') || (nombreNav === 'CHROME MOBILE')
            || (nombreNav === 'OPERA')) {
            url = this.convertToBlob(url, linkName);
        } else if ((nombreNav === 'MICROSOFT EDGE') || (nombreNav === 'IE')) {
            url = url;
        } else {
            url = tipo + linkName + ';base64,' + url;
        }
        const descripNav = platform.description.toUpperCase();
        // Se verifica que sea diferente de chrome mobile, el manejo es diferente
        if (nombreNav !== 'CHROME MOBILE') {
            if (nombreNav === 'CHROME') {
                // Chrome para Android o IOS
                if ((descripNav.indexOf('ANDROID') > -1) || (descripNav.indexOf('IOS') > -1)) {
                    this.downloadPdfChromeApp(url.toString());
                } else {
                    const downloadLink = document.createElement('a');
                    downloadLink.href = url;
                    downloadLink.download = linkName;
                    downloadLink.style.display = 'none';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    downloadLink.remove();
                    // window.open(url, '_blank');
                }
            } else {
                if ((nombreNav === 'MICROSOFT EDGE') || (nombreNav === 'IE')) {
                    const file = this.convertToBlobFile(url, linkName);
                    window.navigator.msSaveOrOpenBlob(file, linkName);
                } else if ((nombreNav === 'SAFARI') && (descripNav.indexOf('IOS') > -1)) {
                    window.open(url, '_blank');
                } else {
                    const downloadLink = document.createElement('a');
                    downloadLink.href = url;
                    downloadLink.download = linkName;
                    downloadLink.style.display = 'none';
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    downloadLink.remove();
                    //  window.open(url, '_blank');
                }
            }
        } else {
            // Chrome para IOS
            this.downloadPdfChromeApp(url.toString());
        }
    }


    static convertToBlob(link: string, name: string) {
        const downloadLink = document.createElement('a');
        downloadLink.href = link;
        downloadLink.target = '_blank';
        downloadLink.download = name;
        // decode base64 string, remove space for IE compatibility
        const binary = atob(link.replace(/\s/g, ''));
        const len = binary.length;
        const buffer = new ArrayBuffer(len);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([view], {type: 'application/pdf'});
        const webkit = 'webkitURL';
        const url = (window.URL || window[webkit]).createObjectURL(blob);
        return url;
    }

    static convertToBlobFile(link: string, name: string) {
        const downloadLink = document.createElement('a');
        downloadLink.href = link;
        downloadLink.target = '_blank';
        downloadLink.download = name;
        // decode base64 string, remove space for IE compatibility
        const binary = atob(link.replace(/\s/g, ''));
        const len = binary.length;
        const buffer = new ArrayBuffer(len);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([view], {type: 'application/pdf'});
        return blob;
    }

}
