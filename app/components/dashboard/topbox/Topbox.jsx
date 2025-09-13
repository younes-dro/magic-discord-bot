import styles from './styles.module.scss'

const Topbox = ( props ) => {
  return (
   <div className={styles.Topbox}>
   <h1 className={styles.title}>{props.title}</h1>
   </div> 
  )
}

export default Topbox