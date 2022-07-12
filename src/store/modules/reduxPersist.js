import storage from 'redux-persist/lib/storage';
import { persistReducer} from 'redux-persist';

export default reducers =>{
  const persistedReducers = persistReducer({
    key: 'REACT-BASE',
    storage,
    whitelist:['click'],
    },
    reducers
  )
  return persistedReducers;
}