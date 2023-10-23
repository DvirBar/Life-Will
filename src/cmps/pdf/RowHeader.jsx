import React from 'react'
import TableRow from './TableRow'

function RowHeader({ children }) {
    const rowHeaderStyle = {
        backgroundColor: '#662A6820'
    }

    return (
        <TableRow outerStyles={rowHeaderStyle}>
            {children}
        </TableRow>
    )
}

export default RowHeader