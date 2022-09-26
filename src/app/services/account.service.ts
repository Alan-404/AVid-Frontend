import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { LoginDTO, ResponseLoginDTO } from '../models/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  loginAccount(loginData: LoginDTO):Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>("http://localhost:5200/account/auth", loginData)
  }
}
