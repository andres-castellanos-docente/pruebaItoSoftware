import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {AppCargandoService} from '../appBase/cargando/app.cargando.service';
import errorlab from './httpconfig_labels.json';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private cargandoService: AppCargandoService) {
    }

    lbl = errorlab;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = `${environment.apiUrl}`;
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJleHRlcm5vIiwiaWF0IjoxNTc2MDg5MzI2LCJleHAiOjE1NzYxNzU3MjZ9.waqXRNZ0M_LF38HT8Q-EC1ClGy_HVjkzD-GGABe5o-u2fztPazZWp40TQw3N3X44mjKU1lLbFHBzGNQp7VbJSw'
            }
        });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if ((error.status === 401) || (error.status === 403)) {

                } else {
                }
                this.cargandoService.detenCargando();
                return throwError(error);
            }));
    }
}
