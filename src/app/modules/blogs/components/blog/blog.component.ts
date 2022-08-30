import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  @Input('blog') blog: any | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
