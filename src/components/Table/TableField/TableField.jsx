import React from 'react'
import classes from './TableField.module.css'

export default function TableField({ children, users, columns }) {
    return (
        <div className={classes.tableField}>
            <table>
                <thead>
                    <tr>{columns && columns.map((head) => <th>{head.heading}</th>)}</tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((row) => (
                            <tr className={classes.row}>
                                {columns.map((col) => (
                                    <td>{row[col.field]}</td>
                                ))}
                                {children}
                            </tr>
                        ))}
                </tbody>
            </table>
            {users ? null : <p>No Row to show</p>}
        </div>
    )
}
