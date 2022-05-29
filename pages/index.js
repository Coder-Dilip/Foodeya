import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import LandingProduct from '../components/LandingProduct'
import LandingIngredients from '../components/LandingIngredients'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [width, setwidth] = useState(0)
  useEffect(() => {
    setwidth(window.innerWidth)
  }, [])
  
  return (
    <>
      <Header />

      {/* Hero Section */}
      <h1 style={{color:'orangered',marginTop:'140px',marginBottom:'30px',textAlign:'center',display:'block',opacity:0.7}}>Food Recipe On Your Hand!</h1>
      
      <h4 style={{textAlign:'center',maxWidth:'700px',width:'90vw',margin:'auto',zIndex:1,fontWeight:'normal',lineHeight:'1.4rem',opacity:0.8}}>More than 13000 food Recipe details. Powered by Artificial intelligence for recommending you the best Recipe according to your interest </h4>

      <div style={{ marginTop: '5px',display:'flex',justifyContent:'center',width:'100vw',marginBottom:'60px'}}>
      <img src="https://i.pinimg.com/originals/a6/38/e6/a638e6e85f9d56f515760c0d63d24f5c.png"  className={styles.home_img} />
      </div>


      {/* Products Section */}
      <LandingProduct />

    {/* Ingredients Section */}
    <LandingIngredients width={width} />
    </>
  )
}



