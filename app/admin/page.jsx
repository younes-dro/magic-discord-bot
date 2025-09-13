import Topbox from '@/app/components/dashboard/topbox/Topbox'
import styles from './styles.module.scss'

const page = () => {
  return (
    <div className={styles.home}>
      <div className={`${styles.box} ${styles.box1}`}>
        <Topbox title="Discord" />
        Box1
      </div>
      <div className={styles.box}>Box2</div>
      <div className={styles.box}>Box3</div>
      <div className={styles.box}>Box4</div>
      <div className={styles.box}>Box5</div>
      <div className={styles.box}>Box6</div>
      <div className={styles.box}>Box7</div>
      <div className={styles.box}>Box8</div>
      <div className={styles.box}>Box9</div>


    </div>
  )
}

export default page