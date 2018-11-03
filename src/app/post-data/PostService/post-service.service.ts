import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostDetail} from '../../Model/PostDetail';
import {PostList} from '../../Model/PostList';
import {Observable, throwError} from 'rxjs';
import { error } from 'util';
import {PostCreateModel} from '../../Model/PostCreate';
import {PostCreateWithPicture} from '../../Model/PostCreateWithPicture';
import { PostCreateComponent } from 'src/app/post-data/post-create/post-create.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl : string;
  constructor(private http: HttpClient) { 
    this.postUrl = 'http://localhost:55056/api/postmodels/';
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
