import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
    console.log("Service working...");
  }

  getAll() {
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
