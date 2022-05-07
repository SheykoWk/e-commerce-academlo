import { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import { loginUser } from '../services/login'



const Login = () => {

    const {handleSubmit, register} = useForm( )

    const [userObj, setUserObj] = useState({})

    const onSubmit = (data) => {
        console.log(data)
        setUserObj(data)
    }

    useEffect(() => {
        if(userObj.email){
            loginUser(userObj)
                .then((res) => {
                    console.log(res)
                })
        }
    }, [userObj])


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <label htmlFor='email'>Email</label>
                <input id='email' placeholder='example@example.com' type='email' {...register('email')} />
                <label htmlFor='password'>Password</label>
                <input id='password' placeholder='Your password' type='password' {...register('password')} />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Login