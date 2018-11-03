import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {UserRegister} from '../../Model/UserRegister';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ok } from 'assert';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})


export class CreateUserComponent implements OnInit {
  newUser: UserRegister;
  userInputForm : FormGroup;
  constructor(private dataService : DataService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.userInputForm = new FormGroup({
      // UserID: new FormControl(0,Validators.required),
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      ConfirmPassword: new FormControl('',Validators.required)
    });
  }

  createNewUser(userInputForm){
    let newUser = this.userInputForm.value;
    this.dataService.createUser(newUser).subscribe( 
      (data: UserRegister) => console.log("ok"),
      (error: any) => console.log(newUser),
      async () => {
        if(ok){
          await this.toastr.success('Register successful');
          this.router.navigate(["/Post"]);
        }else{
          this.toastr.error(Error[0]);
        }
      }
    );
  }
}
