import * as React from "react";

import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    DateTimeInput,
    Edit,
    ImageField,
    List,
    NumberInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput
} from 'react-admin';

import NameField from '../fields/NameField';
import TemperatureField from '../fields/TemperatureField';

export const TemperatureList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="user_id" reference="users">
                <NameField/>
            </ReferenceField>
            <ReferenceField source="user_id" reference="users">
                <ImageField source="photo" />
            </ReferenceField>
            <TemperatureField source="temperature" />
            <DateField source="uploaded" showTime="true"/>
        </Datagrid>
    </List>
);

export const TemperatureCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <ReferenceInput source="user_id" reference="users"><SelectInput optionText="id" /></ReferenceInput>
            <NumberInput source="temperature"/>
            <DateTimeInput source="uploaded" />
        </SimpleForm>
    </Create>
)

export const TemperatureEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="user_id" reference="users"><SelectInput optionText="id" /></ReferenceInput>
            <DateInput source="temperature" />
            <DateInput source="uploaded" />
        </SimpleForm>
    </Edit>
);