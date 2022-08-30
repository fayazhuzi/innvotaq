import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.sass']
})
export class BlogDetailComponent implements OnInit {

  blogs: any
  constructor(
    private blogService: BlogService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    debugger
    this.getBlogs();
  }

  getBlogs() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe({
        next: data => {
          debugger
          this.blogs = data;
        },
        error: error => {            
            console.error('There was an error!', error);
        }
    })    
  }
}

