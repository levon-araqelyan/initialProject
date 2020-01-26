import { call, all } from "redux-saga/effects";

export default function* middleware() {
  // eslint-disable-next-line no-empty-function
  yield all([call(function*() {})]);
}
