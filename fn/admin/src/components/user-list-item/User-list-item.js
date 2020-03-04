import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const UserListItem = props => {
    const { email, lastName, firstName, role } = props;
    return (
        <TableRow>
            <TableCell align="left">{firstName}</TableCell>
            <TableCell align="left">{lastName}</TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="left">{role}</TableCell>
        </TableRow>
    );
};

export default UserListItem;