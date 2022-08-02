import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private postService: PostService) {
    this.postService.getAll().subscribe((posts:Post[]) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {
  }

}
