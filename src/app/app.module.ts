import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserComponent } from './User/User.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { GithubComponent } from './github/github.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    HighlightDirective,
    DateCountPipe,
    GithubComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
