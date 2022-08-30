import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe({
        next: data => {
          debugger
          this.users = data;
        },
        error: error => {            
            console.error('There was an error!', error);
        }
    })    
  }
}
