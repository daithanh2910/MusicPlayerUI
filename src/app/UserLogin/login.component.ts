import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserLogin } from 'src/app/Model/UserLogin';
import {DataService} from '../data/data.service';
import { AppRoutingModule } from '../app-routing.module';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserLogin = new UserLogin();
  isLoginError : boolean = false;
  loginInfor : User;
  userInputForm : FormGroup;
  userLoginName : UserLogin;

  constructor(private dataService : DataService, private router : Router) { }
  
  ngOnInit() {
    this.userInputForm = new FormGroup({
      // UserID: new FormControl(0,Validators.required),
      UserName: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      // ConfirmPassword: new FormControl('',Validators.required)
    });
  }

  OnSubmit(UserName, Password){
    let loginInfor = this.userInputForm.value;
    this.dataService.userAuthentication(loginInfor.UserName,loginInfor.Password).subscribe( async (data : any)=>{
      // await localStorage.setItem('Token', data.access_token);
      // await localStorage.setItem('Username', data.userName);
      // await localStorage.setItem('Id', data.userID);

      console.log('ok');
      
      // this.router.navigate(['/Post']);
      this.userLoginName = this.getUserLogin();
      
      // this.router.navigate(['/Post']);
      
    },
    (err: HttpErrorResponse)=> {this.isLoginError = true;});
  }
  getUserLogin(): any{
    return new UserLogin().getUserLoginName();
  }
}
