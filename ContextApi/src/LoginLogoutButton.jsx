import { useState } from 'react'
import { useUserAuth } from './UserAuthContext'

const LoginLogoutButton = () => {
	const { isLoggedIn, login, logout } = useUserAuth()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = () => {
		login(username, password)
	}

	return (
		<div>
			{isLoggedIn ? (
				<button
					onClick={logout}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
				>
					Logout
				</button>
			) : (
				<div className="flex flex-col space-y-4">
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						onClick={handleLogin}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
					>
						Login
					</button>
				</div>
			)}
		</div>
	)
}

export default LoginLogoutButton
