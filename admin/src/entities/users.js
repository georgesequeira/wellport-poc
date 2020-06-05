import * as React from "react";

import {
    BooleanField,
    Datagrid,
    EmailField,
    ImageField,
    List,
    NumberField,
    Show,
    SimpleShowLayout,
    TextField
} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <EmailField source="email" />
            <ImageField source="photo" />
            <NumberField source="hourly_wage" />
            <NumberField source="skill_level" />
            <TextField source="wage_type" />
            <BooleanField source="active" />
        </Datagrid>
    </List>
);


export const UserShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <EmailField source="email" />
            <ImageField source="photo" />
            <NumberField source="hourly_wage" />
            <NumberField source="skill_level" />
            <TextField source="wage_type" />
            <BooleanField source="active" />
        </SimpleShowLayout>
    </Show>
);