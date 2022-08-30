import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: './blogs', pathMatch: 'full'},  
  {
    path: 'blogs', 
    loadChildren: () => import('./modules/blogs/blogs.module').then((m) => m.BlogsModule),},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
