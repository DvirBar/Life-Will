import React from 'react'
import TableCell from './TableCell'

function TableHeader({ children, size }) {
    const headerStyle = {
        fontWeight: "bold"
    }
    return (
        <TableCell outerStyles={headerStyle} size={size}>
            {children}
        </TableCell>
    )
}

export default TableHeader