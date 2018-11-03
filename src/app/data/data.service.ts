import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../Model/User';
import { observable } from 'rxjs/internal/symbol/observable';
import {Routes, RouterModule} from '@angular/router';
import {catchError, retry} from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';
import{UserRegister} from '../Model/UserRegister';
import {PostList} from '../Model/PostList';
import {PostDetail} from '../Model/PostDetail';
import {PostCreateModel} from '../Model/PostCreate';
import { ServeUrl} from './ServeUrl';
import {UserView} from '../Model/UserView'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userUrl :string;
  postUrl : string;
  userView : UserView;

  constructor(private http: HttpClient) {
      this.userUrl = 'https://localhost:44344/api/users/';
      this.postUrl = 'http://localhost:55056/api/postmodels/';
   }

  getUserInfor() : Observable<User[]> {
    console.log('Get all user');
    return this.http.get<User[]>(this.userUrl +"userinfo");
    
  }
  getUserByID(ID: string) : Observable<User>{
    console.log('Get user by ID');
    return this.http.get<User>(this.userUrl +"userinfo/"+ID);
  }
  createUser(newUser : UserRegister): Observable<UserRegister>{
    console.log('Create user');
    return this.http.post<UserRegister>(this.userUrl + "register/", newUser);
  }

  userAuthentication(UserName, Password){
    var data = "UserName=" + UserName + "&Password=" + Password + "&grant_type=password";
    this.userView.UserName = UserName;
    this.userView.Password = Password;
    var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True'});
    console.log(data);
    return this.http.post('https://localhost:44344/api/users/authenticate', this.userView, {headers: reqHeader});
  }

  getUserClaims(){
    return this.http.get(this.userUrl + 'GetUserClaims');
  }

  getPostList(): Observable<PostList[]>{
    console.log('Get all post');
    return this.http.get<PostList[]>(this.postUrl);
  }
  createPost(formModel: any): Observable<PostCreateModel>{
    console.log('Create new post');
    // var newPostModel : PostCreateWithPicture = new PostCreateWithPicture(newPost, postImage);
    // console.log(newPostModel);
    return this.http.post<PostCreateModel>(this.postUrl + 'post/',formModel);
  }
  getPostByID(ID: number):Observable<PostDetail>{
    console.log('Get post by ID service');
    return this.http.get<PostDetail>(this.postUrl +ID);
  }
  editPost(updatePost : PostList):Observable<void>{
    console.log('check edit function');
    return this.http.put<void>(this.postUrl +'put/',updatePost);
  }
}
