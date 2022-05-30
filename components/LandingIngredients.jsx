import Fade from 'react-reveal/Fade';
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
        <Fade left>
          <div>
              <p style={{opacity:0.5,marginBottom:'20px'}}>Recipe Details</p>
              <h1 style={{maxWidth:'400px'}}>Detailed Instructions on <span style={{color:'orangered',textDecoration:'underline'}}>Ingredients</span></h1>
              <p style={{maxWidth:'500px',opacity:0.6,lineHeight:'1.4rem',marginTop:'30px'}}>Complete cooking procedure with amount of ingredients should be used for making a delicious meal</p>
          </div>
          </Fade>
          <Fade right>
          <img src="/instruct.png" style={{width:width>800?'40vw':'80vw',height:'auto',marginTop:'20px'}} alt="" />
          </Fade>
      </div>
      <h3 style={{textAlign:'center',color:'orange',marginBottom:'70px'}}>Fruit Shake 👇🍷</h3>
      <div style={{display:'flex',margin:'auto',maxWidth:'90vw',justifyContent:'space-evenly'}}>
          <img src="/ingre.png" alt=""  style={{width:'80vw',height:'auto'}}  />
      </div>
      <div style={{marginTop:'170px',display:'flex',justifyContent:'space-between', flexWrap:'wrap',alignItems:'center'}}>

        <div>
          <p style={{opacity:0.6}}>Delicious Recipes</p>
          <h1 style={{marginBottom:'100px', maxWidth:'450px',marginTop:'40px'}}>Detailed Mouth Watering <span style={{color:'orangered',textDecoration:'underline'}}>Recipes</span></h1>
          <Fade bottom>
          <img src="/easy.webp" style={{marginBottom:'30px',maxWidth:'90vw'}} alt="" />
          </Fade>
        </div>
        <Fade top>
        <div>
          <h3 style={{marginBottom:'-5px',color:'orangered'}}>🌟 Easy Instructions</h3>
          <p style={{maxWidth:'350px',fontSize:'0.9rem',opacity:0.6,marginLeft:'30px'}}>Easy Instructions on making the delicious meals yet detailed information for making your cooking experience easier.</p>
          <h3 style={{marginTop:'75px',marginBottom:'-5px',color:'green'}}>🥘 Ingredients List</h3>
          <p style={{maxWidth:'350px',fontSize:'0.9rem',opacity:0.6,marginLeft:'30px'}}>Complete detail on Ingredients such as ratio of the raw material used for making the mouth watering meals. </p>
          <h3 style={{marginTop:'75px',marginBottom:'-5px',color:'blueviolet'}}>✍️ Expert Suggestions</h3>
          <p style={{maxWidth:'350px',fontSize:'0.9rem',opacity:0.6,marginLeft:'30px'}}>Recipes making instructions suggested by the expert chefs around the world.</p>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default LandingIngredients;
