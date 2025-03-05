import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from './UserAuthContext'
import LoginLogoutButton from './LoginLogoutButton'

const LoginPage = () => {
	const { isLoggedIn } = useUserAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/')
		}
	}, [isLoggedIn, navigate])

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
				<h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
				<LoginLogoutButton />
			</div>
		</div>
	)
}

export default LoginPage
