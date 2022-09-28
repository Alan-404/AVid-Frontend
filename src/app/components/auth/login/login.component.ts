import { Component, OnInit } from '@angular/core';
import { LoginDTO } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginDTO = {email: '', password: ''}

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  getInfo(event: Event){
    const name = (event.target as HTMLInputElement).name
    const value = (event.target as HTMLInputElement).value

    if (name == "email" || name == "password"){
      this.loginData[name] = value
    }
  }

  submitLoginAccount(){
    this.accountService.loginAccount(this.loginData).subscribe(response => {
      console.log(response)
      if (response.success){
        localStorage.setItem("AVid", response.accessToken)
        this.router.navigate(['/home'])
      }
    })
  }

}
