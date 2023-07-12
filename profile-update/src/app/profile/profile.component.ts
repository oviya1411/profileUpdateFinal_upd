import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { AddProfileComponent } from '../add-profile/add-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  profiles:any;
  constructor(private _router:Router, private apiservice:ApiService){}
   
  ngOnInit(): void{
    this.getAllUsers();
  }

  getAllUsers(){
    this.apiservice.getAllData().subscribe((res)=>{
     console.log(res.data);
     this.profiles=res.data; 
    })
  }
    navigateToAddProfile()
    {
      console.log("In navigate");
      this._router.navigate(['/addProfile'])
    }
  

}
