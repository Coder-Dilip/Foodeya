import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />

      <h1 style={{color:'orangered',marginTop:'150px',textAlign:'center',display:'block',border:'2px solid black'}}>10000+ Food Recepies!</h1>

      <div style={{ marginTop: '20px',display:'flex',justifyContent:'center',width:'100vw',border:'2px solid black'}}>
      <img src="https://i.pinimg.com/originals/a6/38/e6/a638e6e85f9d56f515760c0d63d24f5c.png" style={{backgroundSize:'cover',backgroundPosition:'center',margin:'auto',width:'100%'}} />
      </div>
    </>
  )
}



