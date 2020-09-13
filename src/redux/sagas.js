import {call, put, takeEvery} from 'redux-saga/effects'
import { setAlert, toggleIsFetched } from './actions'
import { FETCH_POST, REQUEST_POSTS } from './types'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(toggleIsFetched())
    const payload = yield call(fetchPosts)
    yield put({type: FETCH_POST, payload})
    yield put(toggleIsFetched())
  } catch (error) {
    yield put(setAlert('Ошибка в получении постов'))
    yield put(toggleIsFetched())
  }
}

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}