import { useState, useEffect } from 'react'
import { FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import './App.css'

const App = () => {
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState({
		title: '',
		description: '',
		dueDate: '',
	})
	const [editTask, setEditTask] = useState(null)
	const [filter, setFilter] = useState('all')
	const [sort, setSort] = useState('asc')

	// Load tasks from localStorage on mount
	useEffect(() => {
		const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []
		setTasks(savedTasks)
	}, [])

	// Save tasks to localStorage whenever tasks change
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setNewTask({ ...newTask, [name]: value })
	}

	const addTask = () => {
		if (!newTask.title || !newTask.dueDate) return
		const task = { ...newTask, id: Date.now(), completed: false }
		setTasks([...tasks, task])
		setNewTask({ title: '', description: '', dueDate: '' })
	}

	const toggleCompletion = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id))
	}

	const startEdit = (task) => {
		setEditTask(task)
	}

	const saveEdit = () => {
		setTasks(
			tasks.map((task) =>
				task.id === editTask.id ? { ...task, ...editTask } : task
			)
		)
		setEditTask(null)
	}

	const filteredTasks = tasks.filter((task) => {
		if (filter === 'completed') return task.completed
		if (filter === 'incomplete') return !task.completed
		return true
	})

	const sortedTasks = filteredTasks.sort((a, b) => {
		const dateA = parseISO(a.dueDate)
		const dateB = parseISO(b.dueDate)
		return sort === 'asc' ? dateA - dateB : dateB - dateA
	})

	return (
		<div className="app">
			<h1>Task Manager</h1>
			<div className="task-form">
				<input
					type="text"
					name="title"
					placeholder="Title"
					value={newTask.title}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="description"
					placeholder="Description"
					value={newTask.description}
					onChange={handleInputChange}
				/>
				<input
					type="date"
					name="dueDate"
					value={newTask.dueDate}
					onChange={handleInputChange}
				/>
				<button onClick={addTask}>Add Task</button>
			</div>

			<div className="controls">
				<select
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				>
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="incomplete">Incomplete</option>
				</select>
				<select value={sort} onChange={(e) => setSort(e.target.value)}>
					<option value="asc">Due Date (Ascending)</option>
					<option value="desc">Due Date (Descending)</option>
				</select>
			</div>

			<div className="task-list">
				{sortedTasks.map((task) => (
					<div
						key={task.id}
						className={`task ${task.completed ? 'completed' : ''}`}
					>
						<div className="task-content">
							<h3>{task.title}</h3>
							<p>{task.description}</p>
							<p>
								Due:{' '}
								{format(parseISO(task.dueDate), 'MMM dd, yyyy')}
							</p>
						</div>
						<div className="task-actions">
							<button onClick={() => toggleCompletion(task.id)}>
								{task.completed ? <FaTimes /> : <FaCheck />}
							</button>
							<button onClick={() => startEdit(task)}>
								<FaEdit />
							</button>
							<button onClick={() => deleteTask(task.id)}>
								<FaTrash />
							</button>
						</div>
					</div>
				))}
			</div>

			{editTask && (
				<div className="edit-modal">
					<h2>Edit Task</h2>
					<input
						type="text"
						value={editTask.title}
						onChange={(e) =>
							setEditTask({ ...editTask, title: e.target.value })
						}
					/>
					<input
						type="text"
						value={editTask.description}
						onChange={(e) =>
							setEditTask({
								...editTask,
								description: e.target.value,
							})
						}
					/>
					<input
						type="date"
						value={editTask.dueDate}
						onChange={(e) =>
							setEditTask({
								...editTask,
								dueDate: e.target.value,
							})
						}
					/>
					<button onClick={saveEdit}>Save</button>
					<button onClick={() => setEditTask(null)}>Cancel</button>
				</div>
			)}
		</div>
	)
}

export default App
