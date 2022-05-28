import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import styles from '../styles/Home.module.css'
import RecommendCards from '../components/RecommendCards';

export default function Food({ data }) {
  // let {Title,Cleaned_Ingredients,id,recommended_to,Image_Name,Instructions}=data
  let parentData = data[0][0]
  return (
    <>
      {/* <h1>{Title}</h1> */}
      <img src={`https://dilipbackend.xyz/public/storage/recommend/food/${parentData.Image_Name}.jpg`}></img>

      {data.splice(1, data.length).map((element, index) => (
        <>
          <RecommendCards
          key={index}
            id={element[0].id}
            title={element[0].Title}
            instructions={element[0].Instructions}
            image={element[0].Image_Name}
            ingredients={element[0].Cleaned_Ingredients}
          />
        </>
      ))}


    </>
  )
}


export async function getServerSideProps() {
  const key = process.env.API_KEY
  let formdata = new FormData()
  formdata.append("id", 13200)
  formdata.append("key", process.env.API_KEY)
  let result = await fetch("https://dilipbackend.xyz/api/recommend", {
    method: "POST",
    body: formdata
  })
  result = await result.json()
  return {
    props: {
      data: result
    }
  }
}

