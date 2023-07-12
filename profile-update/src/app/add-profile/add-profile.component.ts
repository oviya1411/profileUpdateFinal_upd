import { Component,OnInit } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms';
import{ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit{
  
  constructor(private http:HttpClient, private router: Router){}
  postUrl='';
  ngOnInit(): void {
    
  }
  onSubmit(data:any){
    this.http.post(this.postUrl,data)
    .subscribe((result)=>{
      console.warn("result",result);
    })
    console.warn(data)

    this.router.navigate(['/profile']);
  }

}
