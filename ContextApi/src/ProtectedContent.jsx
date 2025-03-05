import { useUserAuth } from './UserAuthContext'

const ProtectedContent = () => {
	const { isLoggedIn } = useUserAuth()

	if (!isLoggedIn) {
		return null
	}

	return (
		<div className="mt-4 p-4 bg-green-100 border border-green-400 rounded shadow-md">
			<h2 className="text-2xl font-bold">Protected Content</h2>
			<p>This content is only visible to logged-in users.</p>
			<div className="mt-4">
				<h3 className="text-xl font-semibold">User Dashboard</h3>
				<p>Welcome to your dashboard. Here you can manage your account, view your activity, and more.</p>
				<ul className="list-disc list-inside mt-2 space-y-1">
					<li>Account Settings</li>
					<li>Recent Activity</li>
					<li>Notifications</li>
					<li>Support</li>
				</ul>
			</div>
		</div>
	)
}

export default ProtectedContent
