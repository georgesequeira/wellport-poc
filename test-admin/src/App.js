// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from './users';
import {PostList} from './posts';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin  dashboard={Dashboard} dataProvider={dataProvider} >
        <Resource name="posts" list={PostList} edit={EditGuesser}/>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;