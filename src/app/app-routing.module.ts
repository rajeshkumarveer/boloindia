import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';
import { ChatComponent } from './chat/chat.component';
import { StoryComponent } from './story/story.component';
import { SearchComponent } from './home/search/search.component';
import { PostComponent } from './home/post/post.component';
import { CommentsComponent } from './home/midhome/comments/comments.component';
import { StoryprivacyComponent } from './story/storyprivacy/storyprivacy.component';
import { ImageViewComponent } from './reusable/image-view/image-view.component';


const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'signup', component:SignupComponent },
  {path:'', component: HomeComponent },
  {path:'search', component: SearchComponent },
  {path:'comments', component: CommentsComponent },
  {path:'post', component: PostComponent },
  {path:'activity', component: ActivityComponent },
  {path:'chat', component: ChatComponent },
  {path:'story', component: StoryComponent },
  {path:'storyprivacy', component: StoryprivacyComponent },
  {path:'imageview', component: ImageViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[SignupComponent,LoginComponent,HomeComponent,ActivityComponent,ChatComponent,StoryComponent,SearchComponent,PostComponent,CommentsComponent,StoryprivacyComponent,ImageViewComponent]
