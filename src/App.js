import React, {Component} from 'react';
import './App.css';
import Main from '../src/components/MainComponents'

import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import {configureStore} from "./redux/configureStore"

const store = configureStore();

class App extends Component {

  render() {
    return (
      // doing the provider thing will make the store available to all the components
      <Provider store={store}>

        <BrowserRouter>

          <div>
            <Main />
          </div>

        </BrowserRouter>

      </Provider>
    )
  }
}

export default App;
