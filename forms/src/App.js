import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from 'react';
import Form from './components/form';
// import Business from './components/signup';
// import Linker from "./components/Linker";
// import Personal from './components/personal';


function App() {
  return (
    <React.Fragment>
      <Router>
      <div className='App'>
          {/* <Linker></Linker>
       <Switch>
        <Route exact path='/'>
          <Personal/>
        </Route>
        <Route path='/personal'>
          <Personal/>
        </Route>
        <Route path='/signup'>
          <Business/>
        </Route>
      </Switch> */}
        <Switch>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
      </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
