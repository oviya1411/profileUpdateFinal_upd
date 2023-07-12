import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:User=new User();
  constructor(private router: Router){}

  ngOnInit():void{
    console.log("In");
    this.userLogin();
  }

  userLogin(){
    console.log("In");
    console.log(this.user);
  }


  onLogin(){
    this.router.navigate(['/profile']);
  }

}
