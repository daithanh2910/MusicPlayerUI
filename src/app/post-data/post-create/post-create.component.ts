import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserLogin } from 'src/app/Model/UserLogin';
import { PostCreateModel } from '../../Model/PostCreate';
import { PostService } from '../PostService/post-service.service';
import { Router } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  userID: string;
  createPostForm: FormGroup;
  newPost: PostCreateModel;
  form: FormGroup;
  file : File;

  @ViewChild('fileInput') fileInput : ElementRef;

  constructor(private postService: PostService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.userID = new UserLogin().getUserLoginId();
    this.createForm();
  }


  createForm(){
    this.form = this.fb.group({
      ID: [0],
      PostTitle: ['', Validators.required],
      PostText: ['',Validators.required],
      PostDescription: ['',Validators.required],
      UserID: [this.userID],
      PostImage: null
    });
  }

  onFileChange(event){
    console.log("change");
    if(event.target.files.length > 0){
      console.log("change file");
      this.file = event.target.files[0];
    }
  }

  prepareSave(): any{
    let input = new FormData();
    input.append('ID',this.form.get('ID').value);
    input.append('PostTitle', this.form.get('PostTitle').value);
    input.append('PostText',this.form.get('PostText').value);
    input.append('PostDescription', this.form.get('PostDescription').value);
    input.append('UserID', this.form.get('UserID').value);
    input.append('PostImage',this.form.get('PostImage').value);
    input.append('PostImage', this.file);
    return input;
  }

  createNewPost(){
    const formModel = this.prepareSave();
    console.log(formModel);
    this.postService.createPost(formModel).subscribe(
      (data)=>{
        console.log("ok"),
        console.log(data)},
      (error:any) => console.log("error component")
    );
  }


  // async createNewPost() {
  //   this.newPost = await this.createPostForm.value;
  //   this.newPost.ID = 0;
  //   this.newPost.UserID = await this.userID;
  //   let postImage = this.createPostForm.controls['PostImage'];
  //   console.log(this.newPost);
  //   // console.log(postImage);
  //   this.postService.createPost(this.newPost, postImage).subscribe(
  //     (data: any) => {
  //       console.log("ok"),
  //       this.router.navigate(['/Post'])
  //     },
  //     (error: any) => console.log("error in component")
  //   );
  // }
}
