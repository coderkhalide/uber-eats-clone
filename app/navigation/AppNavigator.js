import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser, selectUser } from '../redux/slices/authSlice';
import AuthNavigator from './AuthNavigator';
import { auth } from '../configs/firebase';
import HomeNavigator from './HomeNavigator';

export default function AppNavigator() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const unlisten = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                const user = {
                    name: authUser.displayName,
                    image: authUser.photoURL,
                    email: authUser.email
                }
                dispatch(loginUser(user))
            }
            else {
                dispatch(logoutUser())
            }
        })
        return () => {
            unlisten();
        }
    }, [])

    return (
        <NavigationContainer>
            {user ? (
                <HomeNavigator />
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    )


}