import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent {

  constructor(
    private router: Router,
    private toast: HotToastService,
    private postsService: PostsService
    ) { }

  sendForm(data:any){
    this.postsService.createPost(data.userId,data.title,data.body).then(()=>{
      this.toast.success(`Post create success`,{
        duration:5000,
        position:'bottom-right'
      });
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000);
    }).catch(err=>{
      this.toast.error(`Post create error`,{
        duration:5000,
        position:'bottom-right'
      });
    })
  }
}
