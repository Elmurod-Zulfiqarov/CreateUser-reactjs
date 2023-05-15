import './App.css'
import { useState } from 'react'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import UserList from './components/userList/UserList'
import NewUserForm from './components/newuser/NewUserForm'

function App() {
	const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])

	const deleteUser = (id) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id)
		)
	}

	const closeModal = (e) => {
		if (e.target.className === "overlay") setShowModal(false)
		if (e.key === "Escape") setShowModal(false)
	}

	const addUser = (user) => {
		setUsers((prev) => [...prev, user])
		setShowModal(false)
	}

  return (
      <div onClick={closeModal} onKeyDown={closeModal} className="App">
        <Navbar usersLength={users.length}/>
          <main>
            <div className="no-users">
              {users.length === 0 && <h2>No Users</h2>}
            </div>
						<UserList users={users} deleteUser={deleteUser}/>
          </main>
					{showModal && <NewUserForm addUser={addUser}/>}
					<button className='create-user' onClick={() => setShowModal(true)}>Create User</button>
        <Footer />
      </div>
  )
}

export default App
