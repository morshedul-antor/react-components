import { useState } from 'react'
import { FormField, Input, ButtonForm } from './Form/Form'
import classes from './Home.module.css'

export default function Home() {
    const [user, setUser] = useState({
        text: '',
        email: '',
        phone: '',
    })

    console.log(user)

    const handleOnchange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let postFetch = await fetch(`users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
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
                    <Input
                        title={'Text: '}
                        type={'text'}
                        name={'text'}
                        placeholder={'Text Field'}
                        onChange={handleOnchange}
                    />

                    <div className={classes.formGrid}>
                        <Input
                            title={'Email: '}
                            type={'email'}
                            name={'email'}
                            placeholder={'Email Field'}
                            onChange={handleOnchange}
                        />
                        <Input
                            title={'Phone: '}
                            type={'number'}
                            name={'phone'}
                            placeholder={'Phone Field'}
                            onChange={handleOnchange}
                        />
                    </div>
                    <ButtonForm title={'Submit'} />
                </form>
            </FormField>
        </div>
    )
}
