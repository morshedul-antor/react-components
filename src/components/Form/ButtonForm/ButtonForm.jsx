import React from 'react'
import classes from './ButtonForm.module.css'

export default function Button(props) {
    return (
        <div className={classes.button}>
            <button type="submit">{props.title}</button>
        </div>
    )
}
