import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TuesdayComponent } from './14-04-2020/tuesday/tuesday.component';
import { MovieComponent } from './movie/movie.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ReverseStr } from './mypipes/reverseStr';
import { ReverseArray } from './mypipes/reverseArr';
import { RemoveDuplicates } from './mypipes/removeDups';

@NgModule({
  declarations: [
    AppComponent,
    TuesdayComponent,
    MovieComponent,
    ProjectTwoComponent,
    ReverseStr,
    ReverseArray,
    RemoveDuplicates,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
