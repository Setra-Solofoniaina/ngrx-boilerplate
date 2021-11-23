import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import * as R from './@store/app-reducer';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './@services/app-effects';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('app', R.reducer),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([AppEffects]),
  ],
  declarations: [AppComponent, PostsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
