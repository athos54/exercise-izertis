import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  public postId = ''
  public postData: any
  public authorData: any
  public commentsData: any
  public mapsUrl: any = null

  constructor(
    public sanitizer: DomSanitizer,
    private actRoute: ActivatedRoute,
    private postsService:PostsService,
    private usersService: UsersService
  ) { 
    this.postId = this.actRoute.snapshot.params.id;
  }

  async ngOnInit() {
    this.postData = await this.postsService.getPost(this.postId)
    console.log('this.postData',this.postData);
    this.authorData = await this.usersService.getUser(this.postData.userId)
    console.log('this.authorData',this.authorData);
    this.mapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.authorData.googleMapsUrl)
    this.commentsData = await this.postsService.getComments(this.postId)
    console.log('this.commentsData',this.commentsData);
  }
}
