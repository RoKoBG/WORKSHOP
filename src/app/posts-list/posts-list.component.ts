import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  postLists: Post[] = [];
  isLoading: boolean = true;
  
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
      this.apiService.getPosts(5).subscribe({
        next: (posts) => {
          this.postLists = posts;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.error(`Error: ${err}`);
        },
      });
  }
}
