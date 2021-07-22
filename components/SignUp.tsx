import React from 'react'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'
import toast from 'react-hot-toast'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import styles from '../styles/SignUp.module.scss'

const SignUp: React.FC = () => {
    const [userCredential, setUserCredential] = React.useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, confirmPassword, password, email } = userCredential

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {

        event.preventDefault()


        if (password !== confirmPassword) {
            toast.error("The passwords don't match")
            setUserCredential({ ...userCredential, password: '', confirmPassword: '' })
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            setUserCredential({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        const { name, value } = event.target

        setUserCredential({ ...userCredential, [name]: value })
    }

    return (

        <div className={styles.sign_up}>
            <h2 className={styles.title}>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className={styles.sign_up_form} onSubmit={handleSubmit}>
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
