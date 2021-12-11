import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { MiscService } from 'src/app/services/misc.service';

@Component({
  selector: 'app-edit-post-page',
  templateUrl: './edit-post-page.component.html',
  styleUrls: ['./edit-post-page.component.scss'],
})
export class EditPostPageComponent implements OnInit {
  public postId = '';
  public postData: any;

  constructor(
    private router: Router,
    private toast: HotToastService,
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
  }

  async sendForm(data: any) {
    try {
      const queries = [
        this.postsService.updatePostQuery(
          this.postId,
          data.userId,
          data.title,
          data.body
        ),
      ];
      const response = await this.miscService.execMutation(queries);
      this.toast.success(`Post update success`, {
        duration: 5000,
        position: 'bottom-right',
      });
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000);
    } catch (error) {
      this.toast.error(`Post update error`, {
        duration: 5000,
        position: 'bottom-right',
      });
    }
  }
}
