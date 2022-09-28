import { Component, OnInit } from '@angular/core';
import { genderSet } from 'src/app/common/const';
import { CreateUserDTO } from 'src/app/dto/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  genders: Array<string> = genderSet

  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    
  }

  userRegisterData: CreateUserDTO = {firstName: '', lastName: '', email: '', bdate: '', gender: '',password:'', phone: '', role: false, avatar: ''}
  

  getInfo(event: Event){
    const name = (event.target as HTMLInputElement).name
    const value = (event.target as HTMLInputElement).value

    if (name == "firstName" || name == "lastName" || name == "email" || name == "bdate" || name == 'gender' || name == 'password' || name == 'phone'){
      this.userRegisterData[name] = value
    }
  }

  getInfoSelect(value: string){
    this.userRegisterData.gender = value.toLowerCase()
  }


  uploadFile(event: any){
    this.userRegisterData.avatar = event.target.files[0]
    console.log(this.userRegisterData)
  }


  submitRegisterUser(){
    console.log(this.userRegisterData)
    this.userService.registerUser(this.userRegisterData).subscribe((response) => {
      console.log(response)
    })
  }

}
