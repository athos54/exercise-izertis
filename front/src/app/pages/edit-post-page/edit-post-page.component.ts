import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
  styleUrls: ['./edit-post-page.component.scss']
})
export class EditPostPageComponent implements OnInit {

  public postId = ''
  public postData:any

  constructor(
    private router: Router,
    private toast: HotToastService,
    private actRoute: ActivatedRoute,
    private postsService:PostsService
    ) { 
      this.postId = this.actRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.postsService.getPost(this.postId).then(post=>{
      this.postData = post
    })
  }

  sendForm(data:any){
    this.postsService.updatePost(this.postId,data.userId,data.title,data.body).then(()=>{
      this.toast.success(`Post update success`,{
        duration:5000,
        position:'bottom-right'
      });
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000);
    }).catch(err=>{
      this.toast.error(`Post update error`,{
        duration:5000,
        position:'bottom-right'
      });
    })
  }
}
