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
    async function fetchData() {
      const response = await fetch('example.json');
      const data = await response.json();
      console.log(data);
    }

    fetchData();
    //   (res=>{
    //     fetch(res).then(response=>response.json()).then(data=>{
    //       if(data.authority == "1"){
    //         window.location.href = "http://localhost:4200/Home";
    //       }else{
    //         window.location.href = "http://localhost:4200/Home";
    //       }
    //     })
    //   },err=>{
    //     console.log(err)
    //   }
    // )
  }
}
