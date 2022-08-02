import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { PostService } from './services/post.service';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';
import { Route, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "hello",
    component: HelloWorldComponent
  },
  {
    path: "posts",
    component: PostsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    PostsComponent,
    AboutComponent,
    HelloWorldComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
