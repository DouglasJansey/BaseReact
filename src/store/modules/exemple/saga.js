import { call, put, all, takeLatest } from 'redux-saga/effects';
import {toast} from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const requisicao = ()=>
new Promise((resolve)=>{
  setTimeout(()=>{
    resolve();
  }, 600)
});

function* exempleRquest(){
  try{
    yield call(requisicao);
    yield put(actions.requestSuccess())

    }catch{
      toast.error('Deu erro!')
      yield put(actions.requestFailure());
    }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exempleRquest)
 ])