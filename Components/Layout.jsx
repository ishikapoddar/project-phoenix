import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.maincontent}>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout