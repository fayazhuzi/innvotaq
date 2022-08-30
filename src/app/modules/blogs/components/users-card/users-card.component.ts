import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.sass']
})
export class UsersCardComponent implements OnInit {
  @Input('user') user: any | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
