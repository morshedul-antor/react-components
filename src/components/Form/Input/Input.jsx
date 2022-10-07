import classes from './Input.module.css'

export default function Input(props) {
    return (
        <div className={classes.input}>
            <label>
                {props.title}
                <input
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    placeholder={props.placeholder}
                />
            </label>
        </div>
    )
}
