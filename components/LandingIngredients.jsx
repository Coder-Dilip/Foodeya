import { useState } from "react";
import Fade from "react-reveal/Fade";
import styles from '../styles/Home.module.css'
function LandingIngredients({ width }) {
  const [Email, setEmail] = useState("");
  console.log(width);
  return (
    <div style={{ maxWidth: "1100px", width: "90vw", margin: "auto",marginBottom:'150px' }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "60px",
        }}
      >
        <Fade left>
          <div>
            <p style={{ opacity: 0.5, marginBottom: "20px" }}>Recipe Details</p>
            <h1 style={{ maxWidth: "400px" }}>
              Detailed Instructions on{" "}
              <span style={{ color: "orangered", textDecoration: "underline" }}>
                Ingredients
              </span>
            </h1>
            <p
              style={{
                maxWidth: "500px",
                opacity: 0.6,
                lineHeight: "1.4rem",
                marginTop: "30px",
              }}
            >
              Complete cooking procedure with amount of ingredients should be
              used for making a delicious meal
            </p>
            <button
              style={{
                padding: "10px 25px",
                borderRadius: "7px",
                borderBottomRightRadius: "30px",
                marginTop: "10px",
                cursor: "pointer",
                border: "none",
                color: "white",
                background: "#fca503",
              }}
            >
              Explore
            </button>
          </div>
        </Fade>
        <Fade right>
          <img
            src="/instruct.png"
            style={{
              width: width > 800 ? "40vw" : "80vw",
              height: "auto",
              marginTop: "20px",
            }}
            alt=""
          />
        </Fade>
      </div>
      <h3
        style={{ textAlign: "center", color: "orange", marginBottom: "70px" }}
      >
        Fruit Shake 👇🍷
      </h3>
      <div
        style={{
          display: "flex",
          margin: "auto",
          maxWidth: "90vw",
          justifyContent: "space-evenly",
        }}
      >
        <img
          src="/ingre.png"
          alt=""
          style={{ width: "80vw", height: "auto" }}
        />
      </div>
      <div
        style={{
          marginTop: "170px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ opacity: 0.6 }}>Delicious Recipes</p>
          <h1
            style={{
              marginBottom: "100px",
              maxWidth: "450px",
              marginTop: "40px",
            }}
          >
            Detailed Mouth Watering{" "}
            <span style={{ color: "orangered", textDecoration: "underline" }}>
              Recipes
            </span>
          </h1>
          <Fade bottom>
            <img
              src="/easy.webp"
              style={{ marginBottom: "30px", maxWidth: "90vw" }}
              alt=""
            />
          </Fade>
        </div>
        <Fade top>
          <div>
            <h3 style={{ marginBottom: "-5px", color: "orangered" }}>
              🌟 Easy Instructions
            </h3>
            <p
              style={{
                maxWidth: "350px",
                fontSize: "0.9rem",
                opacity: 0.6,
                marginLeft: "30px",
              }}
            >
              Easy Instructions on making the delicious meals yet detailed
              information for making your cooking experience easier.
            </p>
            <h3
              style={{
                marginTop: "75px",
                marginBottom: "-5px",
                color: "green",
              }}
            >
              🥘 Ingredients List
            </h3>
            <p
              style={{
                maxWidth: "350px",
                fontSize: "0.9rem",
                opacity: 0.6,
                marginLeft: "30px",
              }}
            >
              Complete detail on Ingredients such as ratio of the raw material
              used for making the mouth watering meals.{" "}
            </p>
            <h3
              style={{
                marginTop: "75px",
                marginBottom: "-5px",
                color: "blueviolet",
              }}
            >
              ✍️ Expert Suggestions
            </h3>
            <p
              style={{
                maxWidth: "350px",
                fontSize: "0.9rem",
                opacity: 0.6,
                marginLeft: "30px",
              }}
            >
              Recipes making instructions suggested by the expert chefs around
              the world.
            </p>
          </div>
        </Fade>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "20px",
          flexWrap: "wrap",
          width: "90vw",
          maxWidth: "800px",
          margin: "auto",
          marginTop: "150px",
          boxShadow: "0px 2px 9px 0px rgba(0,0.3,5.3,0.25)",
        }}
      >
        <img
          src="https://cdn.dribbble.com/users/1012997/screenshots/14073001/media/4994fedc83e967607f1e3b3e17525831.png?compress=1&resize=400x300"
          style={{ borderRadius: "10px",maxWidth:'90vw' }}
          alt=""
        />
        <div>
          <h5 style={{  fontWeight: "bolder" }}>
            Get <span style={{color:'orange'}}>Notified</span>
          </h5>
          <h2 style={{marginTop:'-10px'}}>Our Newsletter</h2>
          <div style={{display:'flex',alignItems:'center'}}>
            <p style={{color:'white',backgroundColor:'orange',padding:'10px 15px',fontWeight:'bold'}}>@</p>
          <input
            type="text"
            placeholder="Email..."
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{padding:'12px 25px',outline:'none',border:'none',background:'#ebebeb',borderRadius:'10px',borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px'}}
          />
          </div>
          <button style={{
                padding: "10px 25px",
                borderRadius: "7px",
                marginTop: "20px",
                cursor: "pointer",
                border: "none",
                color: "white",
                background: "orange",
                fontWeight:'bold',
              }}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default LandingIngredients;
