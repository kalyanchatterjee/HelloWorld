import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { PostsComponent } from './components/posts/posts.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { CommentsFormComponent } from './components/comments-form/comments-form.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { InputComponent } from './components/input/input.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PageListComponent } from './components/page-list/page-list.component';
import { RandomPhotosComponent } from './components/random-photos/random-photos.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    ObservablesComponent,
    PostsComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    CommentsFormComponent,
    CheckoutComponent,
    InputComponent,
    SearchBarComponent,
    PageListComponent,
    RandomPhotosComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
