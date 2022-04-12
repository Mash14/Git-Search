import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { DataServiceService } from './data-service.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { RepoComponent } from './repo/repo.component';
import { ApphighlightDirective } from './apphighlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    NotFoundComponent,
    AboutComponent,
    RepoComponent,
    ApphighlightDirective,
    DateCountPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
