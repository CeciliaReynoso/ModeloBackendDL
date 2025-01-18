import axios from 'axios'
import RolesContext from '../contexts/RolesContext'
import { useContext, useEffect } from 'react'
import { ENDPOINT } from '../config/constans'

const Home = () => {
  const { setRoles } = useContext(RolesContext)

  const getRolesData = () => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      axios.get(ENDPOINT.users, { headers: { Authorization: `Bearer ${token}` } })
        .then(({ data: [user] }) => setRoles({ ...user }))
        .catch(() => {
          window.sessionStorage.removeItem('token')
          setRoles(null)
        })
    }
  }

  useEffect(getRolesData, [])

  return (
    <div className='py-5'>
      <h1>
        Bienvenido a <span className='fw-bold'>Wellness for Pets</span>
      </h1>
      <h4>
        Sitio del Administrador <br /> para gestionar la creación de usuarios y perfiles internos
      </h4>
    </div>
  )
}

export default Home
