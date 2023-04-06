import { Component } from '@angular/core';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(){}
  Home(){
    if(getCookie('permission') == "1"){
      location.href="http://localhost:4200/Adminpage";
    }else{
      location.href="http://localhost:4200/Home";
    }
  }
}
