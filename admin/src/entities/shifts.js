import * as React from "react";
import { 
    Datagrid, 
    DateField,
    ImageField,
    List, 
    NumberField,
    ReferenceField, 
    TextField} from 'react-admin';
    
import NameField from '../fields/NameField';

export const ShiftList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users">
                <NameField />
            </ReferenceField>
            <ReferenceField source="user_id" reference="users">
                <ImageField source="photo" />
            </ReferenceField>
            <DateField source="start" showTime="true"/>
            <DateField source="end" showTime="true"/>
            <NumberField source="station" />
        </Datagrid>
    </List>
);