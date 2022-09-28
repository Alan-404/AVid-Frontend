import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { LoginDTO, ResponseLoginDTO } from '../models/account';
import { apiUrl } from '../common/const';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  loginAccount(loginData: LoginDTO):Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(`${apiUrl}/account/auth`, loginData)
  }
}
