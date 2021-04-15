import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const api = 'https://api.unsplash.com'
const req ="/photos/random"
const key ="kqpLGA7ViIf9eZbZ8xMgY8qvhvmDJkjClaTyu-IMYrk"
const url = api + req;

interface iResp {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor( private http: HttpClient) { }

  getPhoto(){
    return this.http.get<iResp>(url, {
      headers:{
        Authorization:`Client-ID ${key }`
      }
    })

  }

}

// Unsplash notes:
// end_point: https://api.unsplash.com/
// client_id : https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_K
// auth_header: Authorization: Client-ID YOUR_ACCESS_KEY
// access_key :  kqpLGA7ViIf9eZbZ8xMgY8qvhvmDJkjClaTyu-IMYrk