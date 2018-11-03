import { Component, OnInit, EventEmitter } from '@angular/core';
import {CreateComment} from '../../Model/createComment';
import {CommentServiceService} from '../comment-service.service';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { UserLogin } from 'src/app/Model/UserLogin';
import { Output } from '@angular/core';
import { CommentDetailInfor} from '../../Model/commentDetail';
import { AuthGuard } from 'src/app/auth/auth.guard';
@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  createCommentModel: CreateComment;
  commentForm: FormGroup;
  userID: string;
  postID: number;

 @Output() comments = new EventEmitter<boolean>();
  constructor(private commentService : CommentServiceService, private activatedRoute : ActivatedRoute) {
    if(this.activatedRoute.snapshot.params["id"]){
      this.postID = this.activatedRoute.snapshot.params["id"];
    }
   }

  ngOnInit() {
    this.commentForm = new FormGroup({
      CommentText : new FormControl('',[Validators.required, Validators.minLength(10)])
    });
    this.userID = new UserLogin().getUserLoginId();
  }

  comment(){
    this.comments.emit();
    console.log("check emit");
  }

  async createComment(){
    if(!this.commentForm.valid) return;
    if(!AuthGuard) return;
    this.createCommentModel = await this.commentForm.value;
    this.createCommentModel.UserID = await new UserLogin().getUserLoginId();
    this.createCommentModel.PostID = await this.postID;
    this.commentService.createComment(this.createCommentModel).subscribe(
      async (data : CreateComment) => {
        await console.log("ok"),
        console.log(data),
        await this.comments.emit(),
        this.commentForm.reset()},
      (error: any) => console.log("error")
    );
  }
  get CommentText(){ return this.commentForm.get('CommentText');}
}
