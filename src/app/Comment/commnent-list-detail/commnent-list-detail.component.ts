import { Component, OnInit } from '@angular/core';
import {CommentServiceService} from '../comment-service.service';
import {CommentDetailInfor} from '../../Model/commentDetail';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-commnent-list-detail',
  templateUrl: './commnent-list-detail.component.html',
  styleUrls: ['./commnent-list-detail.component.css']
})
export class CommnentListDetailComponent implements OnInit {
  commentDetail : CommentDetailInfor[];
  postID : number;

  constructor(private commentService : CommentServiceService, private activatedRoute: ActivatedRoute) {
    if(this.activatedRoute.snapshot.params["id"]){
      this.postID = this.activatedRoute.snapshot.params["id"];
    }
   }

  ngOnInit() {
    this.getCommentList();
  }

  onComment(){
    this.getCommentList();
  }
  getCommentList(){
    this.commentService.getCommentByPostID(this.postID).subscribe(
      (data: CommentDetailInfor[]) => this.commentDetail = data,
      (error : any) => console.log("error")
    )
  }
}
