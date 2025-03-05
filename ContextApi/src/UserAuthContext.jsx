import  { createContext, useState, useContext } from 'react'

const UserAuthContext = createContext(undefined)

const staticUser = {
	username: 'user',
	password: 'password'
}

export const UserAuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const login = (username, password) => {
		if (username === staticUser.username && password === staticUser.password) {
			setIsLoggedIn(true)
		} else {
			alert('Invalid credentials')
		}
	}

	const logout = () => setIsLoggedIn(false)

	return (
		<UserAuthContext.Provider value={{ isLoggedIn, login, logout }}>
			{children}
		</UserAuthContext.Provider>
	)
}

export const useUserAuth = () => {
	const context = useContext(UserAuthContext)
	if (!context) {
		throw new Error('useUserAuth must be used within a UserAuthProvider')
	}
	return context
}
