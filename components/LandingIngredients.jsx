function LandingIngredients({width}) {
    console.log(width)
  return (
    <div style={{ maxWidth: "1100px", width: "90vw", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap:'wrap'
        }}
      >
          <div>
              <p style={{opacity:0.5,marginBottom:'20px'}}>Recipe Details</p>
              <h1 style={{maxWidth:'400px'}}>Complete Instructions on <span style={{color:'orangered'}}>Ingredients</span></h1>
              <p style={{maxWidth:'500px',opacity:0.6,lineHeight:'1.4rem',marginTop:'20px'}}>Complete cooking procedure with amount of ingredients should be used for making a delicious meal</p>
          </div>
          <img src="https://cdn.dribbble.com/users/143350/screenshots/14052412/media/27ab3785352e64f357bc1608bae74361.png?compress=1&resize=400x300&vertical=top" style={{width:width>800?'40vw':'80vw',height:'auto'}} alt="" />
      </div>
      <h3 style={{textAlign:'center',color:'orange',marginBottom:'40px'}}>Fruit Shake 👇🍷</h3>
      <div style={{display:'flex',margin:'auto',maxWidth:'90vw',justifyContent:'space-evenly'}}>
          <img src="/ingre.svg" alt=""  style={{width:'90vw',height:'auto'}}  />
      </div>
    </div>
  );
}

export default LandingIngredients;
