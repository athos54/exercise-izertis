import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { MiscService } from 'src/app/services/misc.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss'],
})
export class CreatePostPageComponent {
  constructor(
    private router: Router,
    private toast: HotToastService,
    private postsService: PostsService,
    private miscService: MiscService
  ) {}

  async sendForm(data: any) {
    try {
      const queries = [
        this.postsService.createPostQuery(data.userId, data.title, data.body),
      ];
      const response = await this.miscService.execMutation(queries);
      this.toast.success(`Post create success`, {
        duration: 5000,
        position: 'bottom-right',
      });
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 3000);
    } catch (error) {
      this.toast.error(`Post create error`, {
        duration: 5000,
        position: 'bottom-right',
      });
    }
  }
}
