import * as React from "react";
// react-admin
import { Admin, Resource, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

// material ui assets
import AssessmentIcon from '@material-ui/icons/Assessment';
import GridOnIcon from '@material-ui/icons/GridOn';
import UserIcon from '@material-ui/icons/Group';

// custom entities
import {ShiftList} from './entities/shifts';
import { TemperatureCreate, TemperatureList } from "./entities/temperatures";
import {UserList, UserShow} from './entities/users';


const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => (
    <Admin dataProvider={dataProvider} >
        <Resource name="temperatures" list={TemperatureList} icon={AssessmentIcon} create={TemperatureCreate} edit={EditGuesser}/>
        <Resource name="shifts" list={ShiftList} icon={GridOnIcon} show={ShowGuesser}/>
        <Resource name="users" list={UserList} icon={UserIcon} show={UserShow}/>
    </Admin>
);

export default App;