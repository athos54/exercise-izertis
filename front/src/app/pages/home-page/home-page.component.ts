import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: any = []
  users: any = []
  constructor(
    private router: Router,
    private postsService:PostsService, 
    private usersService:UsersService,
    private toast: HotToastService
    ){}

  ngOnInit(){
    this.usersService.getUsers().then(users=>{
      this.users = users
    })
    this.postsService.getPosts().then(posts=>{
      this.posts = posts
    })
  }

  filterByUser(userId:any){
    this.postsService.getPosts({userId}).then(posts=>{
      this.posts=posts
    })
  }

  editPost(id:String){
    this.router.navigate([`/edit-post/${id}`]);
  }

  deleteClick(post:any){
    this.postsService.deletePost(post.id).then(()=>{
      this.posts = this.posts.filter((el:any)=>el.id !==post.id)

      this.toast.success(`Post ${post.id} delete success`,{
        duration:5000,
        position:'bottom-right'
      });
    }).catch(err=>{
      this.toast.error(`Post ${post.id} delete error`,{
        duration:5000,
        position:'bottom-right'
      });
    })

  }
}
