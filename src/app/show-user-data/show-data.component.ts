import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
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
  
  userInputForm : FormGroup;
  defaultUserID: number;

  constructor(private dataService: DataService) {

  }
  ngOnInit() {
    
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
}
