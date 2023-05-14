
import InitNavigation from './navigation/InitNavigation';

import { Provider } from 'react-redux';


import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/counterSlice';
import authReducer from './redux/authSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
})



export default function App() {
  return (
    <Provider store={store}>
      <InitNavigation/>
    </Provider>
  );
}


