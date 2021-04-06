import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: Error | HttpErrorResponse): Observable<any> {
        throw new Error('We captured it!');
    }
}