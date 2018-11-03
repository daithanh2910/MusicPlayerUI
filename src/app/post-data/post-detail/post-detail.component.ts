import { Component, OnInit } from '@angular/core';
import {PostService} from '../PostService/post-service.service';
import { error } from 'util';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';
import {PostDetail} from '../../Model/PostDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  postDetail : PostDetail;
  postID : any;
  constructor(private postService : PostService,private activateRoute : ActivatedRoute) { 
    if(this.activateRoute.snapshot.params["id"]){
      this.postID = this.activateRoute.snapshot.params["id"];
    };  
  }

  ngOnInit() {
    this.getPostByID(this.postID);
  }

  getPostByID(postID: number){
    this.postService.getPostByID(this.postID).subscribe(
      async (data: PostDetail) => {
        this.postDetail = await data,
        console.log(data),
        console.log(this.postDetail)
      },
      (error: any) => console.log("error")
    )
  }
}
