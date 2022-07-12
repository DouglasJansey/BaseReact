import { all} from 'redux-saga/effects';

import exemple from './exemple/saga';


export default function* rootSaga(){
  return yield all([exemple])
}