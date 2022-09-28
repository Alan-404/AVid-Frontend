import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateUserDTO, ResponseCreateUserDTO } from '../dto/user';
import { apiUrl } from '../common/const';
import {keys} from 'ts-transformer-keys'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  registerUser(userData: CreateUserDTO):Observable<ResponseCreateUserDTO>{
    var form = new FormData()
    form.append("firstName", userData.firstName)
    form.append("lastName", userData.lastName)
    form.append("email", userData.email)
    form.append("phone", userData.phone)
    form.append("gender", userData.gender)
    form.append("avatar", userData.avatar)
    form.append("password", userData.password)
    form.append('role', String(userData.role))
    form.append('bdate', userData.bdate)
    return this.http.post<ResponseCreateUserDTO>(`${apiUrl}/user/api`, form)
  }
}
