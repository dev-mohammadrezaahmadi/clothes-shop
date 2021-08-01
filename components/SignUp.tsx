import React from 'react'
import toast from 'react-hot-toast'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import { signUpStart } from '../redux/slices/user.reducer'
import { useAppDispatch } from '../redux/hooks'

const SignUp: React.FC = () => {
    const dispatch = useAppDispatch()
    const [userCredential, setUserCredential] = React.useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, confirmPassword, password, email } = userCredential

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            toast.error("The passwords don't match")
            setUserCredential({ ...userCredential, password: '', confirmPassword: '' })
            return
        }
        dispatch(signUpStart({ email, password, displayName }))
        setUserCredential({ ...userCredential, email: '', password: '', confirmPassword: '', displayName: '' })
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const { name, value } = event.target
        setUserCredential({ ...userCredential, [name]: value })
    }

    return (

        <div className="w-full sm:w-1/2 flex flex-col">
            <h2 className="text-xl font-bold">I do not have a account</h2>
            <span className="italic">Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
