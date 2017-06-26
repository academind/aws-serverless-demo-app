import { TopicsService } from './topics.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
