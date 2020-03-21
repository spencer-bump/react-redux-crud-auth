import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit   from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList   from './streams/StreamList';
import StreamShow   from './streams/StreamShow';
import Header       from './Header';
import history      from '../history';

// List all - GET    - /streams
// List one - GET    - /streams/:id
// Create   - POST   - /streams
// Update   - PUT    - /streams/:id
// Delete   - DELETE - /streams/:id

// URL based selection
// path="/"                   StreamList    - /streams
// path="/streams/show/:id"   StreamShow    - /streams/:id
// path="/streams/new"        StreamCreate  - /streams
// path="/streams/edit/:id"   StreamEdit    - /streams/:id
// path="/streams/delete/:id" StreamDelete  - /streams/:id

// import NodeMediaServer from 'node-media-server';


const App = () => {
  return (
    <div className="ui container" >
      <Router history={history} >
        <div>
          <Header />
          <Switch>
            <Route path="/"                   exact component={StreamList} />
            <Route path="/streams/new"        exact component={StreamCreate} />
            <Route path="/streams/edit/:id"   exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id"        exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
