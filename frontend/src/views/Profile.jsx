import axios from 'axios'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '../config/constans'
import RolesContext from '../contexts/RolesContext'

const Profile = () => {
  const navigate = useNavigate()
  const { getRoles, setRoles } = useContext(RolesContext)

  const getRolesData = () => {
    const token = window.sessionStorage.getItem('token')
    axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => setRoles({ ...user }))
      .catch(({ response: { data } }) => {
        console.error(data)
        window.sessionStorage.removeItem('token')
        setRoles(null)
        navigate('/')
      })
  }

  useEffect(getRolesData, [])

  return (
    <div className='py-5'>
      <h1>
        Bienvenido <span className='fw-bold'>{getRoles?.email}</span>
      </h1>
      <h3>
        {getRoles?.rol} en {getRoles?.lenguage}
      </h3>
    </div>
  )
}

export default Profile
