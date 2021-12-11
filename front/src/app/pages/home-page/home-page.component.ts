import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { MiscService } from 'src/app/services/misc.service';
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
    private miscService:MiscService,
    private toast: HotToastService
    ){}

  async ngOnInit(){
    const queries = []
    queries.push(this.postsService.getPostsQuery())
    queries.push(this.usersService.getUserQuery())
    const data = await this.miscService.execQuery(queries)
    this.users = data.users
    this.posts = data.posts
  
  }

  async filterByUser(userId:any){
    const queries = [this.postsService.getPostsQuery(userId)]
    const data = await this.miscService.execQuery(queries)
    this.posts=data.posts
  }

  editPost(id:String){
    this.router.navigate([`/edit-post/${id}`]);
  }

  async deleteClick(post:any){
    try {
      const queries = [this.postsService.deletePostQuery(post.id)]
      const data = await this.miscService.execMutation(queries)
      this.posts = this.posts.filter((el:any)=>el.id !==post.id)

      this.toast.success(`Post ${post.id} delete success`,{
        duration:5000,
        position:'bottom-right'
      });
    } catch (error) {
      this.toast.error(`Post ${post.id} delete error`,{
        duration:5000,
        position:'bottom-right'
      });
    }
  }
}
