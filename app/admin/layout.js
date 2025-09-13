import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'


import Navbar from '../components/dashboard/navbar/Navbar'
import Menu from '../components/dashboard/menu/Menu'
import Footer from '../components/dashboard/footer/Footer'
import styles from './styles.module.scss'

export default function DashboardLayout({ children }) {
    return (
      <div className={styles.main}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.menuContainer}>
            <Menu />
            </div>
            <div className={styles.contentContainer}>
            
                {children}
                
            </div>
        </div>
        <Footer />
      </div>
    )
  }