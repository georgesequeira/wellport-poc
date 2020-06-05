import * as React from 'react';

import { NumberField } from 'react-admin';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    safe: { color: 'black' },
    unsafe: { color: 'red' },
});

const TemperatureField = props => {
    const classes = useStyles();
    return (
        <NumberField
            className={classnames({
                [classes.safe]: props.record[props.source] < 99.1,
                [classes.unsafe]: props.record[props.source] >= 99.1,
                "test-safeTemp": props.record[props.source] < 99.1,
                "test-unsafeTemp": props.record[props.source] >= 99.1
            })}
            {...props}
        />
    );
};


export default TemperatureField;