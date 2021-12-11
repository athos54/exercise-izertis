import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { CreatePostPageComponent } from './pages/create-post-page/create-post-page.component';
import { EditPostPageComponent } from './pages/edit-post-page/edit-post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AuthorComponent } from './components/author/author.component';
import { CommentComponent } from './components/comment/comment.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'create-post', component: CreatePostPageComponent },
  { path: 'edit-post/:id', component: EditPostPageComponent },
  { path: 'post-detail/:id', component: PostDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    CreatePostPageComponent,
    PostDetailComponent,
    EditPostPageComponent,
    HomePageComponent,
    PostFormComponent,
    AuthorComponent,
    CommentComponent,
    
  ],
  imports: [
    HttpClientModule, 
    AngularEditorModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
