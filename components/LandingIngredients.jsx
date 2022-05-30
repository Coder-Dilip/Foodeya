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
          flexWrap:'wrap',
          marginBottom:'60px'
        }}
      >
          <div>
              <p style={{opacity:0.5,marginBottom:'20px'}}>Recipe Details</p>
              <h1 style={{maxWidth:'400px'}}>Complete Instructions on <span style={{color:'orangered'}}>Ingredients</span></h1>
              <p style={{maxWidth:'500px',opacity:0.6,lineHeight:'1.4rem',marginTop:'20px'}}>Complete cooking procedure with amount of ingredients should be used for making a delicious meal</p>
          </div>
          <img src="/instruct.png" style={{width:width>800?'40vw':'80vw',height:'auto'}} alt="" />
      </div>
      <h3 style={{textAlign:'center',color:'orange',marginBottom:'70px'}}>Fruit Shake 👇🍷</h3>
      <div style={{display:'flex',margin:'auto',maxWidth:'90vw',justifyContent:'space-evenly'}}>
          <img src="/ingre.png" alt=""  style={{width:'80vw',height:'auto'}}  />
      </div>
    </div>
  );
}

export default LandingIngredients;
