import React from 'react'
import AuthRouter from './routers/AuthRouter'
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <AuthRouter />
      </div>
    </Provider>
  )
}

export default App