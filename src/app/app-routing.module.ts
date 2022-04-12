import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'repo', component: RepoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
