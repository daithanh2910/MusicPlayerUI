import { Injectable } from '@angular/core';
import {CreateComment} from '../Model/createComment';
import {HttpClient} from '@angular/common/http';  
import { Observable } from 'rxjs/internal/Observable';
import {CommentDetailInfor} from '../Model/commentDetail';
@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  commentUrl: string;
  constructor(private http: HttpClient) { 
    this.commentUrl = 'http://localhost:55056/api/CommentModels/'
  }
  
  createComment(newComment: CreateComment) : Observable<CreateComment>{
    console.log("start comment http service");
    return this.http.post<CreateComment>(this.commentUrl +"create/", newComment);
  }

  getCommentByPostID(ID: number):Observable<CommentDetailInfor[]>{
    console.log('get comment detail');
    return this.http.get<CommentDetailInfor[]>(this.commentUrl + ID);
  }
}
