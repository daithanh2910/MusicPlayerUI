import { Component, HostListener } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgModule} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  @HostListener("window:onbeforeunload",["$event"])
  clearLocalStorage(event){
    localStorage.clear();
  }
}
