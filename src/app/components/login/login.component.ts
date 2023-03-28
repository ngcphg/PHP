import { response } from 'express';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService){

  }
  Login(user:string, pass:string){
    const formData:FormData= new FormData();
    formData.append('user',user);
    formData.append('pass',pass);
    this.loginService.LoginService(formData).subscribe
      (res=>{
          if(res === "2"){
            window.location.href = "http://localhost:4200/Home";
          }else{
            if(res === "1"){
              window.location.href = "http://localhost:4200/Adminpage";
            }else{
              alert("Login failed");
            }
          }
      },err=>{
        alert(err)
      }
    )
  }
}
