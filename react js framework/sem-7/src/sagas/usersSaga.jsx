import { call, put, takeEvery } from "redux-saga/effects";

function fetchUsersApi() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}

function* fetchUsers() {
  try {
    const data = yield call(fetchUsersApi);
    yield put({ type: "FETCH_USERS_SUCCESS", payload: data });
  } catch (error) {
    yield put({
      type: "FETCH_USERS_FAILURE",
      payload: error.message || "Smth goes wrong",
    });
  }
}

function* usersSaga() {
  yield takeEvery("FETCH_USERS_REQUEST", fetchUsers);
}

export default usersSaga;
