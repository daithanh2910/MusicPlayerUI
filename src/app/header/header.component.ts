import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataService} from '../data/data.service';
import {Router} from '@angular/router';
import{LoginComponent} from'../UserLogin/login.component';
import {UserLogin} from '../Model/UserLogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userClaims: any;
  login: boolean = false;
  userLoginName : string;
  
  constructor(private router: Router, private dataService : DataService) { }

  ngOnInit() {
    // this.dataService.getUserClaims().subscribe(
    //   (data: any) => this.userClaims = data
    // );
    this.isLogin();

  }

  isLogin(){
    if(localStorage.getItem('userName')){
      this.userLoginName = new UserLogin().getUserLoginName();
      this.login = true;
    }
    return this.login;
  }
  async logOut(){
    await localStorage.removeItem('userToken');
    await localStorage.removeItem('userName');
    await localStorage.removeItem('id');
    this.router.navigate(['/Post']);
  }
}
