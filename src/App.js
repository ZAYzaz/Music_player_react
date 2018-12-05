import React, { Component } from 'react';
 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainContainer from '@pages/main/MainContainer'
import ListContainer from '@pages/list/ListContainer'
import ListContainerDemo from '@pages/list/ListContainer-demo'

class App extends Component {
  render() {
    return (
      <div >
          <Switch>  

                <Route path = "/list" component = {ListContainerDemo}  />
                {/* <Route path = "/list" component = {ListContainer}  /> */}
                <Route path = "/" component = {MainContainer}  /> 
            </Switch>
      </div>
    )
  }
}

export default App;
