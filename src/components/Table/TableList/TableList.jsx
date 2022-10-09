import React from 'react'
import classes from './TableList.module.css'

export default function TableList({ children }) {
    return (
        <div className={classes.tableList}>
            <table className={classes.tableMain}>{children}</table>
        </div>
    )
}
