import { useState } from 'react'
import { tableData } from '../utils/data'
import { FormField, Input, ButtonForm } from './Form/Form'
import classes from './Home.module.css'
import { TableField, TableList } from './Table/Table'

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

    const columns = [
        { field: 'id', heading: '#' },
        { field: 'name', heading: 'Name' },
        { field: 'address', heading: 'Address' },
        { field: 'date', heading: 'Date' },
        { field: 'order', heading: 'Order No' },
    ]

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
            <h1>Table Components</h1>
            {/* <TableField users={tableData} columns={columns}></TableField> */}
            <TableList>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Order Number</th>
                    <th>Action</th>
                </tr>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td className={classes.cap}>{data.name}</td>
                            <td>{data.address}</td>
                            <td>{data.order}</td>
                            <td>
                                <button>Click</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </TableList>
        </div>
    )
}
