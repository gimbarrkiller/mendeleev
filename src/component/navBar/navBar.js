import React from 'react'
import { useTranslation } from 'react-i18next'
import {useLocation} from 'react-router'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

import './navBar.css'

const NavBar = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  return (
    <div className="nav_bar">
      <ul>
        <li className={
          classNames(pathname === '/profile' ? 'active' : '')}
        >
          <Link to="/profile">{t(`nav.home`)}</Link>
        </li>
        <li className={
          classNames(pathname === '/timeZone' ? 'active' : '')}
        >
          <Link to="/timeZone">{t(`nav.timeZone`)}</Link>
        </li>
        <li className={
          classNames(pathname === '/form' ? 'active' : '')}
        >
          <Link to="/form">{t(`nav.form`)}</Link>
        </li>
        <li className={
          classNames(pathname === '/flexBox' ? 'active' : '')}
        >
          <Link to="/flexBox">{t(`nav.flexBox`)}</Link>
        </li>
        <li className={
          classNames(pathname === '/chat' ? 'active' : '')}
        >
          <Link to="/chat">{t(`nav.chat`)}</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
