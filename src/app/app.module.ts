import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CKEditorModule} from 'ng2-ckeditor';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowDataComponent } from './show-user-data/show-data.component';
import { AppRoutingModule } from './/app-routing.module';
import {DataService} from './data/data.service'
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDataComponent } from './post-data/PostComponent/post-data.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateUserComponent} from '../app/show-user-data/create-user/create-user.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './UserLogin/login.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './auth/auth.guard';
import { HeaderComponent } from './header/header.component';
import { PostDetailComponent } from './post-data/post-detail/post-detail.component';
import { PostEditComponent } from './post-data/post-edit/post-edit.component';
import { PostCreateComponent } from './post-data/post-create/post-create.component';
import { CommentCreateComponent } from './Comment/comment-create/comment-create.component';
import { CommnentListDetailComponent } from './Comment/commnent-list-detail/commnent-list-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    PostDataComponent,
    CreateUserComponent,
    LoginComponent,
    HeaderComponent,
    PostDetailComponent,
    PostEditComponent,
    PostCreateComponent,
    CommentCreateComponent,
    CommnentListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [DataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
