import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as S from './@store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dummy = this._store.pipe(select(S.dummy));
  title = 'nrgx-boilerplate';
  constructor(private _store: Store<S.State>) {
    this._store.dispatch(S.Actions.init());
  }
}
