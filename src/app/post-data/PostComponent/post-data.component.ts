import { Component, OnInit } from '@angular/core';
import {PostList} from '../../Model/PostList';
import {PostService} from '../PostService/post-service.service';
import { error } from 'util';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  postList : PostList[];
  postDetail: PostList;
  newPost : PostList;
  postUpdate: PostList;
  constructor(private postService: PostService) { }
  createPostForm : FormGroup;
  updatePostForm : FormGroup;
  ngOnInit() {
    this.getAllPost();
  }

  
  getAllPost() {
    this.postService.getPostList().subscribe(
      (data) => this.postList = data,
      (error: any) => console.log("error"),
    );
  }

}