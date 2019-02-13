import { put, takeEvery, takeLatest, all } from 'redux-saga/effects';

function* fetchCategories() {
  const json = yield fetch('https://api.chucknorris.io/jokes/categories')
    .then(response => response.json());
  yield put({ type: "CATEGORIES_RECEIVED", json: json, });
}

function* fetchJoke({jokeId}) {
  if (jokeId) {
    const json = yield fetch(`https://api.chucknorris.io/jokes/random?category=${jokeId}`)
    .then(response => response.json());
  yield put({ type: "JOKE_RECEIVED", json: json.value, });
  } else {
    const json = yield fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json());
  yield put({ type: "JOKE_RECEIVED", json: json.value, });
  }

  
}

function* actionWatcher() {
  yield all([
    takeLatest('GET_CATEGORIES', fetchCategories),
    takeLatest('GET_JOKE', fetchJoke)
  ])
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}