
function RecommendCards({id,title,ingredients,image,instructions}) {
  console.log(id,title,ingredients,image,instructions)
  return (
      <>
    <div>{title}</div>
    <p>{ingredients}</p>
    <p>{instructions}</p>
    
    <img src={`https://dilipbackend.xyz/public/storage/recommend/food/${image}.jpg`}></img>
    </>
  )
}

export default RecommendCards

