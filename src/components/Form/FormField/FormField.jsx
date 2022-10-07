import classes from './FormField.module.css'

export default function FormField({ children }) {
    return (
        <div className={classes.formField}>
            <div>{children}</div>
        </div>
    )
}
