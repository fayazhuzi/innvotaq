import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsRoutingModule } from './blogs-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BlogsDashboardComponent } from './components/blogs-dashboard/blogs-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { UsersComponent } from './components/users/users.component';
import { UsersCardComponent } from './components/users-card/users-card.component';

@NgModule({
  declarations: [
    BlogsDashboardComponent,
    HeaderComponent,
    LeftMenuComponent,
    BlogDetailComponent,
    BlogComponent,
    UsersComponent,
    UsersCardComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,    
  ]
})
export class BlogsModule { }
