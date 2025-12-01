import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from "./UserHeader.module.css";
import { useLocation } from 'react-router-dom';


const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const {pathname} = useLocation()

  React.useEffect(() => {
    if ('/conta' === pathname) setTitle('Minha Conta') 
    if ('/conta/estatisticas' === pathname) setTitle('Estatísticas') 
    if ('/conta/postar' === pathname) setTitle('Postar') 
  }, [pathname])
  

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader