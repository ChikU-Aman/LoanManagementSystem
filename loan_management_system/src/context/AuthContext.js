import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase'
import { db } from '../Firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password, address, mobileNo, dateOfBirth, adharCard, panCard) {
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            console.log(cred)       
            return db.collection("users").doc(cred.user.uid).set({
                user: email,
                address: address,
                mobileNo: mobileNo,
                dateOfBirth: dateOfBirth,
                adharCard: adharCard,
                panCard : panCard
            }) 
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])



    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider >
    )
}
