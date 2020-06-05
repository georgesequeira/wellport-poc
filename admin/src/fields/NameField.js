import * as React from 'react';

const NameField = ({record ={}}) => {
    return (
        <span>{record['firstname']}-
        {record['lastname']}</span>);
}

export default NameField;