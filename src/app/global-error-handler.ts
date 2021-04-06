import { ErrorHandler } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private http: HttpClient) { }

    handleError(error: Error | HttpErrorResponse) {
        
    this.http.post<any>('http://localhost:3004/error', 
    { errorInstance: error.toString() }).subscribe({
        next: data => {
            console.log("sent the error ")
        },
        error: error => {
            console.error('There was an error sending this error!', error);
        }
    })
 }
}