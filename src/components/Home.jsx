import { useState } from 'react'
import { tableData } from '../utils/data'
import { FormField, Input, ButtonForm } from './Form/Form'
import classes from './Home.module.css'
import { TableField, TableList } from './Table/Table'

export default function Home() {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')

    const columns = [
        { field: 'id', heading: '#' },
        { field: 'name', heading: 'Name' },
        { field: 'address', heading: 'Address' },
        { field: 'date', heading: 'Date' },
        { field: 'order', heading: 'Order No' },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            text,
            email,
        }
        await fetch(`users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
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
