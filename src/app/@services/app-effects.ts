import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { withLatestFrom, tap } from 'rxjs/operators';

import * as S from '../@store';

@Injectable()
export class AppEffects {
  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(S.Actions.init),
        withLatestFrom(this._store.pipe(select(S.state))),
        tap(([action, state]) => {
          if (state.dummy) {
            console.log('true');
          } else {
            console.log('false');
          }
        })
      ),
    { dispatch: false }
  );
  // uploadFile$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(S.Actions.uploadFile),
  //     withLatestFrom(this._store.pipe(select(S.state))),
  //     switchMap(([action, state]) =>
  //       this._fileUploadService
  //         .upload$(action.file)
  //         .pipe(
  //           map((response) =>
  //             S.Actions.UploadSuccess({ imgFilename: response.data })
  //           )
  //         )
  //     )
  //   )
  // );
  constructor(private actions$: Actions, private _store: Store<S.State>) {}
}
