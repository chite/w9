import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; // 使用  Angular 的 HTTP client
import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoteItemComponent } from './note-item/note-item.component';
import { ContentComponent } from './content/content.component';
import { RoutePageComponent } from './route-page/route-page.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NoteItemComponent,
    ContentComponent,
    RoutePageComponent,
  ],
  imports: [
    BrowserModule,
    // 新增一個路由
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'note/:id', component: ContentComponent}
    ]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [RoutePageComponent]
})
export class AppModule { }
