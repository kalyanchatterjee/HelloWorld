import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { PostsComponent } from './components/posts/posts.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    ObservablesComponent,
    PostsComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    CommentsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
