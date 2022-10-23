import classes from './Input.module.css'

export default function Input(props) {
    return (
        <div className={classes.input}>
            <label>
                {props.title}
                <input type={props.type} name={props.name} onChange={props.onChange} placeholder={props.placeholder} />
            </label>
        </div>
    )
}
