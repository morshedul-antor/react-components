import { useState } from 'react'
import { FormField, Input, ButtonForm } from './Form/Form'
import classes from './Home.module.css'

export default function Home() {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            text,
            email,
        }
        let postFetch = await fetch(`users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })

        if (postFetch.ok) {
            console.log('success')
        }
    }

    return (
        <div className={classes.home}>
            <h1>Form Components</h1>
            <FormField>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={classes.formGrid}>
                        <Input
                            title={'Text: '}
                            type={'text'}
                            placeholder={'Text Field'}
                            value={text}
                            onChange={setText}
                        />
                        <Input
                            title={'Email: '}
                            type={'email'}
                            placeholder={'Email Field'}
                            value={email}
                            onChange={setEmail}
                        />
                    </div>
                    <ButtonForm title={'Submit'} />
                </form>
            </FormField>
        </div>
    )
}
