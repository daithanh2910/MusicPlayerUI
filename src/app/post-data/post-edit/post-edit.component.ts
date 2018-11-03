import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {PostDetail} from '../../Model/PostDetail';
import {PostService} from '../PostService/post-service.service';
import {ActivatedRoute} from '@angular/router';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postDetail: PostDetail;
  updatePostForm : FormGroup;
  postID: any;
  constructor(private postService : PostService, private activatedRoute: ActivatedRoute) { 
    if(this.activatedRoute.snapshot.params['id']){
      this.postID = this.activatedRoute.snapshot.params['id'];
    }
  }

  ngOnInit() {
    this.updatePostForm = new FormGroup({
      PostTitle : new FormControl('',Validators.required),
      PostText: new FormControl('',Validators.required),
      PostDescription: new FormControl('', Validators.required)
    });
  }
  updatePost(updatePostForm, postDetail):any{
    let postUpdate = this.updatePostForm.value;
    postUpdate.ID = this.postID;
    this.postService.editPost(postUpdate).subscribe(
      (data: void) => console.log("ok"),
      (error: any) => console.log("error cannot update"),
      () => console.log("post updated")
    );
  }
}
