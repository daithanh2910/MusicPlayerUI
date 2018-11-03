import { Component, OnInit } from '@angular/core';
import { User } from '../user/User';
import { DataService } from '../data/data.service';
import { error } from '@angular/compiler/src/util';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserRegister} from '../Model/UserRegister';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  usersInfor: User[];
  userDetail: User;
  newUser: UserRegister;
  userInputForm : FormGroup;
  defaultUserID: number;

  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    this.userInputForm = new FormGroup({
      // UserID: new FormControl(0,Validators.required),
      UserName: new FormControl('', Validators.required),
      UserPassword: new FormControl('', Validators.required)
    });
    this.defaultUserID = 1;
  }

  getAllUser() {
    this.dataService.getUserInfor().subscribe(
      (data: User[]) => this.usersInfor = data,
      (error: any) => console.log('error'),
      () => console.log('ok')
    );
  }
  getUserByID(id: string) {
    this.dataService.getUserByID(id).subscribe(
      (data: User) => this.userDetail = data,
      (error: any) => console.log('error'),
      () => console.log('ok')
    )
  }
  createNewUser(userInputForm): any {
    let newUser = this.userInputForm.value;
    this.dataService.createUser(newUser).subscribe(
      (data: UserRegister) => console.log("ok"),
      (error: any) => console.log(newUser),
      () => console.log(newUser)
    );
  }

}
