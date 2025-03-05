import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { UserAuthProvider, useUserAuth } from './UserAuthContext'
import LoginPage from './LoginPage'
import Navbar from './Navbar'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import './App.css'

const HomePage = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
		</div>
	)
}

const ProtectedRoute = ({ children }) => {
	const { isLoggedIn } = useUserAuth()
	return isLoggedIn ? children : <Navigate to="/login" />
}

const App = () => {
	return (
		<UserAuthProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<HomePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/about"
						element={
							<ProtectedRoute>
								<AboutPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/contact"
						element={
							<ProtectedRoute>
								<ContactPage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</Router>
		</UserAuthProvider>
	)
}

export default App
