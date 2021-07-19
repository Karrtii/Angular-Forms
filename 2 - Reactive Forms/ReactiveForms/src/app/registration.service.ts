import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url: string = 'E:\\Angular-Forms\\2 - Reactive Forms\\ReactiveForms\\src\\assets\\data\\user.json';

  constructor(private _http: HttpClient) { }

  register(userData: any)
  {
    return this._http.post<any>(this._url, userData);
  }
}
