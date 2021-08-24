import React from 'react'
import './App.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Background from './components/bgApp/Background'

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Background />
      </React.Fragment>
    </Provider>
  )
}

export default App
