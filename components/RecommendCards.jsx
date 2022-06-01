function RecommendCards({ id, title, ingredients, image, instructions }) {
  // console.log(id, title, ingredients, image, instructions);
  return (
    <>
    <img
      src={`https://dilipbackend.xyz/public/storage/recommend/food/${image}.jpg`}
    />
    </>
  );
}

export default RecommendCards;
