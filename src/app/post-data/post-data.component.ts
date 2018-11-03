import { Component, OnInit } from '@angular/core';
import {PostDetail} from '../Model/PostDetail';
import {DataService} from '../data/data.service';
import { error } from 'util';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  postList : PostDetail[];
  postDetail: PostDetail;
  newPost : PostDetail;
  postUpdate: PostDetail;
  constructor(private dataService: DataService) { }
  createPostForm : FormGroup;
  updatePostForm : FormGroup;
  ngOnInit() {

  }

  postUpdateFormCreator(ID: number){
    this.updatePostForm = new FormGroup({
      PostTitle : new FormControl('',[Validators.required, Validators.minLength(10)]),
      PostText : new FormControl('',[Validators.required, Validators.minLength(10)]),
      PostDescription : new FormControl('',[Validators.required, Validators.minLength(10)])
    });
    this.getPostByID(ID);
  }
  postCreateFormCreator(){
    this.createPostForm = new FormGroup({
      PostTitle : new FormControl('',[Validators.required, Validators.minLength(10)]),
      PostText : new FormControl('',[Validators.required, Validators.minLength(10)]),
      PostDescription : new FormControl('',[Validators.required, Validators.minLength(10)])
    });
  }
  
  getAllPost() {
    this.dataService.getPostList().subscribe(
      (data: PostDetail[]) => this.postList = data,
      (error: any) => console.log("error"),
    );
  }
  getPostByID(ID: number){
    this.dataService.getPostByID(ID).subscribe(
      (data: PostDetail) => this.postDetail = data,
      (error: any) => console.log("error")
    )
  }
  
  updatePost(updatePostForm, postDetail):any{
    let postUpdate = this.updatePostForm.value;
    postUpdate.ID = postDetail.ID;
    this.dataService.editPost(postUpdate).subscribe(
      (data: void) => console.log("ok"),
      (error: any) => console.log("error cannot update"),
      () => console.log("post updated")
    );
  }
}