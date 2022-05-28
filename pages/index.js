import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from '../styles/Home.module.css'
import RecommendCard from "../components/RecommendCards";

export default function Home({data}) {
let {Title,Cleaned_Ingredients,id,recommended_to,Image_Name,Instructions}=data

let ids=recommended_to.split(",").map(el=>Number(el))
  return (
    <>
    <h1>{Title}</h1>
    <img src="https://dilipbackend.xyz/public/storage/recommend/food/-burnt-carrots-and-parsnips-56390131.jpg"></img>
   
   {ids.map((id,index)=>(
     <>
     <RecommendCard 
     id={id}
     />
     </>
   ))}


    </>
  )
}


export async function getServerSideProps() {
  const key = process.env.API_KEY
  let formdata = new FormData()
  formdata.append("id", 0)
  formdata.append("key", process.env.API_KEY)
  let result = await fetch("https://dilipbackend.xyz/api/recommend", {
    method: "POST",
    body: formdata
  })
  result = await result.json()
  return {
    props:{
      data:result[0]
    }
  }
}

