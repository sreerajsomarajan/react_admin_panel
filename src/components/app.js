import React, { Component } from "react";
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

class App extends Component {
  render() {
    // <Admin dataProvider={restProvider('http://localhost:3000')}>
    return (
      <Admin dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      </Admin>
    );
  }
}

export default App;
