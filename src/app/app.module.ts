import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { youTubeServiceInjectables } from 'YoutubeSearchComponent';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [youTubeServiceInjectables],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
