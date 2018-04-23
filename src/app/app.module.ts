import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { SearchformComponent } from './components/searchform/searchform.component';
import { MainVideoComponent } from './components/main-video/main-video.component';
import { RelatedVideosComponent } from './components/related-videos/related-videos.component'

@NgModule({
  declarations: [AppComponent, NavBarComponent, SearchformComponent, MainVideoComponent, RelatedVideosComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
