import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MAPS_API_KEY } from 'src/app/config';
import { MiscService } from 'src/app/services/misc.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  public postId = '';
  public postData: any;
  public authorData: any;
  public commentsData: any;
  public mapsUrl: any = null;

  constructor(
    public sanitizer: DomSanitizer,
    private actRoute: ActivatedRoute,
    private postsService: PostsService,
    private miscService: MiscService
  ) {
    this.postId = this.actRoute.snapshot.params.id;
  }

  async ngOnInit() {
    const queries = [this.postsService.getPostQuery(this.postId)];
    const data = await this.miscService.execQuery(queries);

    this.postData = data.post;
    this.authorData = data.post.user;
    this.mapsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps/embed/v1/view?key=${MAPS_API_KEY}&center=${this.authorData.address.geo.lat},${this.authorData.address.geo.lng}&zoom=13`
    );
    this.commentsData = data.post.comments;
  }
}
