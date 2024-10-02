import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReqLogin } from '../models/IReqLogin.interface';
import { IResLogin } from '../models/IResLogin.interface';
import { IReqRegistro } from '../models/IReqRegistro.interface';
import { IResRegistro } from '../models/IResRegistro.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlEndpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(datos: IReqLogin):Observable<IResLogin> {
    let url = `${this.urlEndpoint}/user/login`;
    return this.http.post<IResLogin>(url, datos)
  }

  registro(datos: IReqRegistro):Observable<IResRegistro> {
    let url = `${this.urlEndpoint}/user/create`;
    return this.http.post<IResRegistro>(url, datos)
  }
}
