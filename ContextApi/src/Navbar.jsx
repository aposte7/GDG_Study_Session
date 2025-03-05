import { Link } from 'react-router-dom'
import { useUserAuth } from './UserAuthContext'

const Navbar = () => {
	const { isLoggedIn, logout } = useUserAuth()

	if (!isLoggedIn) {
		return null
	}

	return (
		<nav className="w-full bg-blue-600 p-4 text-white flex justify-between items-center shadow-md">
			<div className="text-xl font-bold">MyApp</div>
			<div className="flex items-center space-x-4">
				<Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300">
					Home
				</Link>
				<Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300">
					About
				</Link>
				<Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded transition duration-300">
					Contact
				</Link>
				<button
					onClick={logout}
					className="hover:bg-red-700 px-3 py-2 rounded transition duration-300"
				>
					Logout
				</button>
			</div>
		</nav>
	)
}

export default Navbar
