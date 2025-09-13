'use client'
import styles from './styles.module.scss'
import Plugin from '@/app/components/dashboard/plugin/Plugin'
import Image from 'next/image'
import data from './data'

const page = () => {

    const handleEnable = () =>{
        alert('ok')
    }
  return (
    <div className={styles.home}>
      {data.map((pluginData, index) => (
        <div key={index} className={styles.box}>
          <Plugin
            svg={pluginData.svg}
            title={pluginData.title}
            text={pluginData.text}
            onEnable={handleEnable}
          />
        </div>
      ))}

    </div>
  )
}

export default page