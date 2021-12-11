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

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'create-post', component: CreatePostPageComponent },
  { path: 'edit-post/:id', component: EditPostPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    CreatePostPageComponent,
    EditPostPageComponent,
    HomePageComponent,
    PostFormComponent
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
