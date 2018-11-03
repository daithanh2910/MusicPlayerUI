import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShowDataComponent} from './show-user-data/show-data.component'
import { PostDataComponent } from 'src/app/post-data/PostComponent/post-data.component';
import {CreateUserComponent} from '../app/show-user-data/create-user/create-user.component';
import { LoginComponent } from 'src/app/UserLogin/login.component';
import { AppComponent } from 'src/app/app.component';
import {AuthGuard} from './auth/auth.guard';
import { PostList } from 'src/app/Model/PostList';
import { PostDetailComponent } from 'src/app/post-data/post-detail/post-detail.component';
import { PostEditComponent } from 'src/app/post-data/post-edit/post-edit.component';
import { PostCreateComponent } from 'src/app/post-data/post-create/post-create.component';

export const routes: Routes = [
  {path: 'CheckUser', component: ShowDataComponent, canActivate: [AuthGuard]},
  {path: 'Post', component: PostDataComponent},
  // {path: 'show-data', component: ShowDataComponent},
  {path: 'RegisterUser', component: CreateUserComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'Home', component: AppComponent},
  {path: 'PostDetail/:id', component: PostDetailComponent},
  {path: 'PostEdit/:id', component:PostEditComponent, canActivate: [AuthGuard]},
  {path: 'PostCreate',component:PostCreateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule { }
