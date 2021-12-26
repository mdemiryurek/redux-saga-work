import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="+process.env.REACT_APP_API_KEY)
    .then(response => response.json());

    yield put({type: "NEWS_RECEIEVED", json: json.articles})
}

function* actionWatcher() {
    yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}