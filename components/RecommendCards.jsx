import { getServerSideProps } from "../pages"


function RecommendCards({data}) {
    // let {Title,Cleaned_Ingredients,id,recommended_to,Image_Name,Instructions}=data
    console.log(data)
  return (
    <div>helo</div>
  )
}

export default RecommendCards



export async function getStaticProps(id){
    console.log(data)
    const key = process.env.API_KEY
  let formdata = new FormData()
  formdata.append("id", id)
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