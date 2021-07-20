import { createContext } from 'react'
import firebase from 'firebase/app'

interface UserContext {
    user: firebase.User | null
}

export const UserContext = createContext<UserContext>({ user: null })