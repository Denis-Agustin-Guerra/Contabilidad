import React from 'react'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div >
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App