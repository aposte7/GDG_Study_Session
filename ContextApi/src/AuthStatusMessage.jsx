import { useUserAuth } from './UserAuthContext'

const AuthStatusMessage = () => {
	const { isLoggedIn } = useUserAuth()

	return (
		<div className="text-lg font-semibold">
			{isLoggedIn ? 'You are logged in.' : 'You are logged out.'}
		</div>
	)
}

export default AuthStatusMessage
