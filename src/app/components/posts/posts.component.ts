import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  msg: boolean;

  constructor(private postService: PostService) {
    this.posts = [];
    this.msg = false;
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addNewPost() {
    const postData = {
      id: 106,
      userID: 12,
      title: 'Hello world',
      body: 'Hello world, this is Kalyan',
    };
    this.postService.createPost(postData).subscribe((data) => {
      this.msg = true;
    });
  }
}
