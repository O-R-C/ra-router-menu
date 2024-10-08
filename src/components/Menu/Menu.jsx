import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className='menu'>
      <NavLink
        className={({ isActive }) => 'menu__item' + (isActive ? ' menu__item-active' : '')}
        to='/'
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) => 'menu__item' + (isActive ? ' menu__item-active' : '')}
        to='/drift'
      >
        Дрифт-такси
      </NavLink>
      <NavLink
        className={({ isActive }) => 'menu__item' + (isActive ? ' menu__item-active' : '')}
        to='/time'
      >
        Time Attack
      </NavLink>
      <NavLink
        className={({ isActive }) => 'menu__item' + (isActive ? ' menu__item-active' : '')}
        to='/forza'
      >
        Forza Karting
      </NavLink>
    </nav>
  )
}
