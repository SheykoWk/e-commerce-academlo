import { useForm } from 'react-hook-form'

const Login = () => {

    const {handleSubmit, register} = useForm( )

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <label htmlFor='email'>Email</label>
                <input id='email' placeholder='example@example.com' type='email' />
                <label htmlFor='password'>Password</label>
                <input id='password' placeholder='Your password' type='password' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Login