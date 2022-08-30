import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogsDashboardComponent } from './components/blogs-dashboard/blogs-dashboard.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '', 
    component: BlogsDashboardComponent,
    children: [
      {path: 'details', component: BlogDetailComponent},
      {path: 'users', component: UsersComponent},
      {path: '', redirectTo: './blogs/details', pathMatch: 'full'}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
