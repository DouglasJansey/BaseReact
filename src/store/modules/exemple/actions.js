import * as types from '../types'

export function requestBotao(){
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  }
}
export function requestSuccess(){
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  }
}
export function requestFailure(){
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  }
}